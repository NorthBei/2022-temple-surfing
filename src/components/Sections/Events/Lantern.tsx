import { Icon } from '@chakra-ui/react';
import LanternPic from '@components/ComputedPic/Lantern';
import { memo } from 'react';

function Lantern() {
  return (
    <Icon
      as={LanternPic}
      w={{ base: '45px', lg: '133px' }}
      h={{ base: '104px', lg: '309px' }}
      mt={{ base: '-15px', lg: 'initial' }}
    />
  );
}

export default memo(Lantern);
