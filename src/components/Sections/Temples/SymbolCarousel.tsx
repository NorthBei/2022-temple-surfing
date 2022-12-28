import { Box } from '@chakra-ui/react';
import Image from '@components/Image';
import useViewType, { ViewType } from '@hooks/useViewType';
import { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import {
  ResponsiveContainer,
  StackedCarousel,
} from 'react-stacked-center-carousel';
import { props } from 'react-stacked-center-carousel/dist/interfaces';
import temples, { TempleType } from 'src/data/index';

type SymbolCarouselItemProps = {
  data: TempleType[];
  dataIndex: number;
};

function SymbolCarouselItem(props: SymbolCarouselItemProps) {
  const { data: carouselData, dataIndex } = props;
  const { name, shortName } = carouselData[dataIndex];
  return (
    <Box>
      <Image
        src={`/images/temple-symbol-${shortName}.png`}
        alt={name}
        width={200}
        height={308}
        draggable={false}
        placeholder="empty"
      />
    </Box>
  );
}

export type SymbolCarouselRef = {
  previous: () => void;
  next: () => void;
};

type SymbolCarouselProps = {
  onSlideChange: props['onActiveSlideChange'];
};

const SymbolCarousel = forwardRef<SymbolCarouselRef, SymbolCarouselProps>(
  (props, ref) => {
    const { onSlideChange } = props;
    const viewType = useViewType();

    const slidesRef = useRef<StackedCarousel | undefined>(undefined);

    useImperativeHandle(ref, () => ({
      previous() {
        slidesRef.current?.goBack();
      },
      next() {
        slidesRef.current?.goNext();
      },
    }));

    return (
      <ResponsiveContainer
        carouselRef={slidesRef}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let slideWidth = parentWidth / 4;
          // slide width max is 200, min is 100
          slideWidth = Math.max(slideWidth, 100);
          slideWidth = Math.min(slideWidth, 200);

          return (
            <StackedCarousel
              ref={carouselRef}
              fadeDistance={
                [ViewType.MOBILE, ViewType.TABLET].includes(viewType) ? 0 : 0.2
              }
              slideComponent={SymbolCarouselItem}
              slideWidth={slideWidth}
              carouselWidth={parentWidth}
              data={temples}
              currentVisibleSlide={7}
              maxVisibleSlide={7}
              onActiveSlideChange={onSlideChange}
              useGrabCursor
            />
          );
        }}
      />
    );
  }
);

SymbolCarousel.displayName = 'SymbolCarousel';

export default memo(SymbolCarousel);
