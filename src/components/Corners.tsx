import { Flex, useDisclosure } from '@chakra-ui/react';
import { HeaderType, SectionName } from '@const/index';
import useSmoothScroll from '@hooks/useSmoothScroll';
import BottomLeftCornerImg from '@images/corners/corner-bottom-left.svg';
import BottomRightCornerImg from '@images/corners/corner-bottom-right.svg';
import TopLeftCornerImg from '@images/corners/corner-top-left.svg';
import TopRightCornerImg from '@images/corners/corner-top-right.svg';
import gsap from 'gsap';
import { memo, useRef } from 'react';
import { useEffect } from 'react';
import useHeaderType from 'src/hooks/useHeaderType';

import MenuDrawer from './MenuDrawer';

export enum CornerSize {
  Mobile = '65px',
  PC = '100px',
}

function Corners() {
  const headerType = useHeaderType();
  const menu = useDisclosure();
  const scrollTo = useSmoothScroll();

  const cornerTopAnim = useRef<gsap.core.Timeline | null>(null);
  const cornerTopLeftImg = useRef<HTMLDivElement>(null);
  const cornerTopRightImg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cornerTopAnim.current) {
      if (headerType === HeaderType.COLLAPSE) {
        cornerTopAnim.current?.progress(1);
        cornerTopAnim.current?.scrollTrigger?.disable();
      } else {
        cornerTopAnim.current?.progress(0);
        cornerTopAnim.current?.scrollTrigger?.enable();
      }
      return;
    }

    const anim = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: '#header',
        start: 'bottom top',
        // https://greensock.com/forums/topic/24410-scroll-trigger-no-end-to-trigger/
        endTrigger: '#main',
        end: 'bottom top',
        toggleActions: 'play play reverse reverse',
      },
      paused: true,
    });

    anim.to(cornerTopLeftImg.current, {
      translateX: 0,
      duration: 0.5,
      ease: 'ease-in-out',
    });

    anim.to(
      cornerTopRightImg.current,
      {
        translateX: 0,
        duration: 0.5,
        ease: 'ease-in-out',
      },
      '<'
    );

    cornerTopAnim.current = anim;
  }, [headerType]);

  return (
    <>
      <Flex
        position="fixed"
        top="0"
        left="0"
        zIndex="corners"
        boxSize={{ base: CornerSize.Mobile, lg: CornerSize.PC }}
        alignItems="flex-start"
        justifyContent="flex-start"
        onClick={() => scrollTo(SectionName.FOLD)}
        cursor="pointer"
        ref={cornerTopLeftImg}
        transform={
          headerType === HeaderType.COLLAPSE ? '' : 'translateX(-100%)'
        }
      >
        <TopLeftCornerImg style={{ width: '100%' }} />
      </Flex>
      <Flex
        position="fixed"
        top="0"
        right="0"
        zIndex="corners"
        boxSize={{ base: CornerSize.Mobile, lg: CornerSize.PC }}
        alignItems="flex-start"
        justifyContent="flex-end"
        onClick={menu.onOpen}
        cursor="pointer"
        ref={cornerTopRightImg}
        transform={headerType === HeaderType.COLLAPSE ? '' : 'translateX(100%)'}
      >
        <TopRightCornerImg style={{ width: '100%' }} />
      </Flex>
      <Flex
        position="fixed"
        left="0"
        bottom="0"
        zIndex="corners"
        boxSize={{ base: CornerSize.Mobile, lg: CornerSize.PC }}
        alignItems="flex-end"
        justifyContent="flex-start"
      >
        <BottomLeftCornerImg style={{ width: '100%' }} />
      </Flex>
      <Flex
        position="fixed"
        right="0"
        bottom="0"
        zIndex="corners"
        boxSize={{ base: CornerSize.Mobile, lg: CornerSize.PC }}
        alignItems="flex-end"
        justifyContent="flex-end"
        onClick={() => scrollTo(SectionName.HEADER)}
        cursor="pointer"
      >
        <BottomRightCornerImg style={{ width: '100%' }} />
      </Flex>
      <MenuDrawer {...menu} />
    </>
  );
}

export default memo(Corners);
