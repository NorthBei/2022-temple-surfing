import { Container, SystemProps } from '@chakra-ui/react';
import * as React from 'react';

import { DRAGON_PILLAR } from '../ComputedPic/DragonPillarBackground';

export const BASIC_X_PADDING = 40;
const X_PADDING = DRAGON_PILLAR.GAP + DRAGON_PILLAR.WIDTH + BASIC_X_PADDING;

export interface MaxContainerProps extends SystemProps {
  children: React.ReactNode;
}

export default function MaxContainer(props: MaxContainerProps) {
  const { children, ...systemProps } = props;
  return (
    <Container
      maxW="1400px"
      px={{ base: '10px', md: `${X_PADDING}px`, lg: `${X_PADDING}px` }}
      {...systemProps}
    >
      {children}
    </Container>
  );
}
