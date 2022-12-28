import MarqueeContainer from '@components/Container/MarqueeContainer';
import Image from '@components/Image';
import { memo } from 'react';

function EventsMarquee() {
  return (
    <MarqueeContainer
      borderColor="brand.yellow2"
      h={{ base: '46px', lg: '52px' }}
      maxW={{ base: '100%', lg: '642px' }}
      w="100%"
    >
      <Image
        src="/images/sections/events/marquee-text.svg"
        alt="marquee text"
        width={390}
        height={28}
        style={{ height: '100%' }}
      />
    </MarqueeContainer>
  );
}

export default memo(EventsMarquee);
