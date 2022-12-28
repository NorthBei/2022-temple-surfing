import { Box, ResponsiveValue, SystemProps } from '@chakra-ui/react';
import Image from '@components/Image';
import { ExportedImageProps } from 'next-image-export-optimizer';

export enum DragonPillarType {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export type DragonPillarItemProps = {
  type: DragonPillarType;
  dragonImage: ExportedImageProps['src'];
  alt: string;
  width: ResponsiveValue<string>;
  gap: ResponsiveValue<string>;
  containerStyle?: SystemProps;
  pillarStyle?: SystemProps;
};

function DragonPillarItem(props: DragonPillarItemProps) {
  const { type, dragonImage, alt, width, gap, containerStyle, pillarStyle } =
    props;

  return (
    <Box
      position="fixed"
      left={type === DragonPillarType.LEFT ? gap : 'initial'}
      right={type === DragonPillarType.RIGHT ? gap : 'initial'}
      zIndex="pillars"
      pointerEvents="none"
      {...containerStyle}
    >
      <Box w={width} h="100vh" bg="brand.red2" border="1px solid">
        <Box
          width="153%"
          position="absolute"
          top="50%"
          left="52%"
          transform="translate(-50%,-50%)"
          {...pillarStyle}
        >
          <Image src={dragonImage} alt={alt} style={{ width: '100%' }} />
        </Box>
      </Box>
    </Box>
  );
}

export default DragonPillarItem;
