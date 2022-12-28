import { Box, Center, Flex, Grid, GridItem } from '@chakra-ui/react';
import Roulette from '@components/ComputedPic/Roulette';
import SectionContainer from '@components/Container/SectionContainer';
import Header from '@components/Header';
import Image from '@components/Image';
import LoadingModal, { LoadingModalRef } from '@components/Modal/LoadingModal';
import { SectionName, WaitingLoadImage } from '@const/index';
import useViewType, { ViewType } from '@hooks/useViewType';
import logoImg from '@images/sections/fold/logo.png';
import tigerImg from '@images/sections/fold/tiger.png';
import waveMobileImg from '@images/sections/fold/wave-mobile.png';
import WavePcImg from '@images/sections/fold/wave-pc.svg';
import { useRef } from 'react';

import CoupletText from './CoupletText';

// 手機版轉盤的直徑寬度是100%, 由於 x-padding 是8px，很小
// 可以忽略，所以我就直接用100vw來作為直徑
export const RouletteSize = {
  Mobile: {
    Diameter: '100vw',
    Radius: '50vw',
  },
  Pc: {
    Diameter: '600px',
    Radius: '300px',
  },
};

const MOBILE_WAVE_WIDTH = '83%';

export default function Fold() {
  const viewType = useViewType();
  const loadingModal = useRef<LoadingModalRef>(null);

  return (
    <>
      <LoadingModal ref={loadingModal} />
      <SectionContainer name={SectionName.FOLD} position="relative">
        <Center>
          <Header />
        </Center>
        <Grid
          gridTemplateAreas={{
            base: `
                "logo logo logo"
                "leftCouplet tiger rightCouplet"
                "roulette roulette roulette"
              `,
            md: `
                "leftCouplet logo rightCouplet"
                "leftCouplet tiger rightCouplet"
                "roulette roulette roulette"
              `,
            lg: `
                "leftCouplet logo rightCouplet"
                "leftCouplet tiger rightCouplet"
                "roulette roulette roulette"
              `,
          }}
          gridTemplateColumns={{
            base: `1fr ${MOBILE_WAVE_WIDTH} 1fr`,
            md: 'initial',
            lg: 'initial',
          }}
          mt="12px"
          alignItems="center"
          justifyContent="center"
          columnGap={{ base: '0', lg: '20px' }}
        >
          <GridItem area="logo" position="relative">
            <Center>
              <Box minW="355px" maxW="600px" w="100%">
                <Image
                  src={logoImg}
                  alt="temple surfing"
                  placeholder="empty"
                  loading="eager"
                  onLoadingComplete={() =>
                    loadingModal.current?.onImagesLoaded(WaitingLoadImage.Logo)
                  }
                />
              </Box>
              {viewType !== ViewType.PC ? (
                <Box
                  position="absolute"
                  top="0"
                  w="100%"
                  maxW={MOBILE_WAVE_WIDTH}
                  zIndex="pillars"
                  onLoad={() =>
                    loadingModal.current?.onImagesLoaded(
                      WaitingLoadImage.WaveMobile
                    )
                  }
                >
                  <Image
                    src={waveMobileImg}
                    alt="波浪"
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                    placeholder="empty"
                    loading="eager"
                    onLoadingComplete={() =>
                      loadingModal.current?.onImagesLoaded(
                        WaitingLoadImage.WaveMobile
                      )
                    }
                  />
                </Box>
              ) : (
                // If in PC, we fire this loaded event directly
                <Box as="span">
                  {Boolean(
                    loadingModal.current?.onImagesLoaded(
                      WaitingLoadImage.WaveMobile
                    )
                  )}
                </Box>
              )}
            </Center>
          </GridItem>
          <GridItem area="leftCouplet" justifySelf="flex-end">
            <Flex justifyContent="flex-end">
              <CoupletText mr={{ base: '7px', lg: 'initial' }}>
                貳零貳貳年十二月十日
              </CoupletText>
            </Flex>
          </GridItem>
          <GridItem area="rightCouplet" justifySelf="flex-start">
            <Flex justifyContent="flex-start">
              <CoupletText ml={{ base: '7px', lg: 'initial' }}>
                上午十一時至下午五時
              </CoupletText>
            </Flex>
          </GridItem>
          <GridItem area="tiger" position="relative">
            <Center
              mt={{ base: '0', lg: '-30px' }}
              mb={{ base: '20px', lg: '-10px' }}
            >
              <Box maxW={{ base: '245px', lg: '350px' }} w="100%" zIndex="-1">
                <Image
                  src={tigerImg}
                  alt="虎爺"
                  placeholder="empty"
                  loading="eager"
                  onLoadingComplete={() =>
                    loadingModal.current?.onImagesLoaded(WaitingLoadImage.Tiger)
                  }
                />
              </Box>
            </Center>
          </GridItem>
          <GridItem area="roulette" position="relative">
            <Center
              h={{
                base: RouletteSize.Mobile.Radius,
                lg: RouletteSize.Pc.Radius,
              }}
              w="100%"
            >
              <Box
                position="absolute"
                top="0px"
                boxSize={{ base: '100%', lg: RouletteSize.Pc.Diameter }}
                px={{ base: '6px', lg: '0' }}
              >
                <Roulette></Roulette>
              </Box>
            </Center>

            <Box
              position="absolute"
              top="0"
              zIndex="vice"
              mx="calc(50% - 50vw)"
              w="100vw"
              h={{
                base: RouletteSize.Mobile.Radius,
                lg: RouletteSize.Pc.Radius,
              }}
            >
              {viewType === ViewType.PC && (
                <Box position="absolute" bottom="0" h="500px" w="100%">
                  <WavePcImg
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      position: 'absolute',
                      bottom: '0',
                    }}
                  />
                </Box>
              )}
            </Box>
          </GridItem>
        </Grid>
      </SectionContainer>
    </>
  );
}
