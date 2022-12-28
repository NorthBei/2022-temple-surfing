import gsap from 'gsap';
import { RefObject, useEffect } from 'react';

interface SmokeAnimProps {
  smoke1: RefObject<SVGGElement>;
  smoke2: RefObject<SVGGElement>;
  smoke3: RefObject<SVGGElement>;
}

function useSmokeAnim(props: SmokeAnimProps) {
  const { smoke1, smoke2, smoke3 } = props;

  useEffect(() => {
    if (smoke1.current && smoke2.current && smoke3.current) {
      gsap.fromTo(
        smoke1.current,
        { x: -3 },
        { x: 3, duration: 0.6, repeat: -1, yoyo: true }
      );
      gsap.fromTo(
        smoke2.current,
        {
          x: -2,
        },
        {
          x: 2,
          duration: 0.4,
          repeat: -1,
          yoyo: true,
        }
      );
      gsap.fromTo(
        smoke3.current,
        {
          x: -4,
        },
        {
          x: 4,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
        }
      );
    }
  }, [smoke1, smoke2, smoke3]);
}

export default useSmokeAnim;
