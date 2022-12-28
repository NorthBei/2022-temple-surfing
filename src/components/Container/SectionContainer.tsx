import { Box, SystemProps } from '@chakra-ui/react';
import MaxContainer from '@components/Container/MaxContainer';
import { SectionBackground } from '@const/index';
import { ReactNode, useMemo } from 'react';
import { Element } from 'react-scroll';

export interface SectionContainerProps extends SystemProps {
  name: string;
  children: ReactNode;
  bgType?: SectionBackground;
}

export default function SectionContainer(props: SectionContainerProps) {
  const { name, children, bgType, ...systemProps } = props;

  const bgStyle = useMemo(() => {
    if (bgType === SectionBackground.SOLID_RED) {
      return {
        bg: 'brand.red',
      };
    }
    if (bgType === SectionBackground.SPOTS_IMAGE) {
      return {
        bgColor: 'brand.red2',
        bgImage: 'url(/images/background/bg-spots.png)',
      };
    }
  }, [bgType]);

  return (
    <Element name={name}>
      <Box as="section" id={name} position="relative" {...systemProps}>
        <Box
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
          zIndex="background"
          {...bgStyle}
        ></Box>
        <MaxContainer>{children}</MaxContainer>
      </Box>
    </Element>
  );
}

SectionContainer.defaultProps = {
  bgType: SectionBackground.SPOTS_IMAGE,
};
