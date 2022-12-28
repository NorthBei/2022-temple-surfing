import { SystemProps } from '@chakra-ui/react';
import MarqueeContainer from '@components/Container/MarqueeContainer';
import Image from '@components/Image';
import { memo } from 'react';

export type NavMarqueeProps = SystemProps;

const ROPE_HEIGHT = '50px';

const ROPE_CSS = {
  content: '""',
  bg: 'black',
  width: '2px',
  position: 'absolute',
  top: `-${ROPE_HEIGHT}`,
  height: ROPE_HEIGHT,
  zIndex: '-1',
};

function HeaderMarquee(props: NavMarqueeProps) {
  const { ...systemProps } = props;
  return (
    <MarqueeContainer
      maxW={{ base: 'initial', lg: '400px' }}
      h="52px"
      borderColor="brand.red2"
      _after={{
        ...ROPE_CSS,
        left: '33px',
      }}
      _before={{
        ...ROPE_CSS,
        right: '33px',
      }}
      {...systemProps}
    >
      <Image
        src="/images/sections/header/marquee-text.svg"
        alt="marquee text"
        width={836}
        height={28}
        style={{ height: '100%' }}
      />
    </MarqueeContainer>
  );
}

export default memo(HeaderMarquee);
