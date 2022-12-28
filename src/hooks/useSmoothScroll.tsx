import { SectionName } from '@const/index';
import { useCallback } from 'react';
import { scroller } from 'react-scroll';

function useSmoothScroll() {
  const scrollToTop = useCallback(
    (anchor: SectionName, callbackFn?: () => void) => {
      scroller.scrollTo(anchor, {
        smooth: true,
      });
      if (callbackFn) callbackFn();
    },
    []
  );

  return scrollToTop;
}

export default useSmoothScroll;
