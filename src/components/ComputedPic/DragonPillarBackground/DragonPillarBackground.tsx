import DragonPillarSpotLeftImg from '@images/background/dragon-pillar-spot-left.png';
import DragonPillarSpotRightImg from '@images/background/dragon-pillar-spot-right.png';
import { memo } from 'react';

import DragonPillarItem, {
  DragonPillarItemProps,
  DragonPillarType,
} from './DragonPillarItem';

export enum DRAGON_PILLAR {
  WIDTH = 60,
  GAP = 60,
}

export type DragonPillarBackgroundProps = Omit<
  DragonPillarItemProps,
  'type' | 'dragonImage' | 'alt'
>;

function DragonPillarBackground(props: DragonPillarBackgroundProps) {
  return (
    <>
      <DragonPillarItem
        type={DragonPillarType.LEFT}
        dragonImage={DragonPillarSpotLeftImg}
        alt="龍柱花紋-左"
        {...props}
      />
      <DragonPillarItem
        type={DragonPillarType.RIGHT}
        dragonImage={DragonPillarSpotRightImg}
        alt="龍柱花紋-右"
        {...props}
      />
    </>
  );
}

DragonPillarBackground.defaultProps = {
  width: `${DRAGON_PILLAR.WIDTH}px`,
  gap: `${DRAGON_PILLAR.GAP}px`,
  containerStyle: {},
  pillarStyle: {},
};

export default memo(DragonPillarBackground);
