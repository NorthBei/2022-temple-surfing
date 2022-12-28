import { Center, HStack, SystemProps } from '@chakra-ui/react';
import SlideLeftArrow from '@images/slides-arrow-left.svg';
import SlideRightArrow from '@images/slides-arrow-right.svg';
import { ReactNode } from 'react';

import SymbolCarouselArrowWrapper from './SymbolCarouselArrowWrapper';

type SymbolCarouselArrowsProps = {
  children: ReactNode;
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;
  isMobileFloat?: boolean;
} & SystemProps;

function SymbolCarouselArrows(props: SymbolCarouselArrowsProps) {
  const {
    children,
    onLeftArrowClick,
    onRightArrowClick,
    isMobileFloat,
    ...systemProps
  } = props;

  return (
    <HStack spacing={{ base: '2px', lg: '10px' }} position="relative">
      <SymbolCarouselArrowWrapper
        left="0"
        onClick={onLeftArrowClick}
        isMobileFloat={isMobileFloat}
        {...systemProps}
      >
        <SlideLeftArrow />
      </SymbolCarouselArrowWrapper>
      <Center flex="1" maxW="100%">
        {children}
      </Center>
      <SymbolCarouselArrowWrapper
        right="0"
        onClick={onRightArrowClick}
        isMobileFloat={isMobileFloat}
        {...systemProps}
      >
        <SlideRightArrow />
      </SymbolCarouselArrowWrapper>
    </HStack>
  );
}

SymbolCarouselArrows.defaultProps = {
  isMobileFloat: true,
};

export default SymbolCarouselArrows;
