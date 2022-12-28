import { BorderProps, Box, SystemProps } from '@chakra-ui/react';
import * as React from 'react';
import Marquee from 'react-fast-marquee';

export interface MarqueeContainerProps extends SystemProps {
  borderColor: BorderProps['borderColor'];
  children: React.ReactNode;
}

export default function MarqueeContainer(props: MarqueeContainerProps) {
  const { borderColor, children, ...systemProps } = props;
  return (
    <Box
      position="relative"
      width="100%"
      maxW="400px"
      h="52px"
      bg="black"
      outline="3px solid"
      outlineColor="brand.black"
      border="2px dotted"
      borderColor={borderColor}
      p="10px 8px"
      {...systemProps}
    >
      <Marquee direction="left" gradient={false} style={{ height: '100%' }}>
        <Box h="100%" w="fit-content">
          {children}
        </Box>
      </Marquee>
    </Box>
  );
}
