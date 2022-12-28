import { Box, Center, Heading, Stack } from '@chakra-ui/react';
import SectionContainer from '@components/Container/SectionContainer';
import Image from '@components/Image';
import WorshipGroupModal, {
  WorshipGroupModalRef,
} from '@components/Modal/WorshipGroupModal';
import { SectionName } from '@const/index';
import { useCallback, useRef, useState } from 'react';
import temples, { TempleType } from 'src/data/index';

import FortunePoems from './FortunePoems';
import Introduction from './Introduction';
import SymbolCarousel, { SymbolCarouselRef } from './SymbolCarousel';
import SymbolCarouselArrows from './SymbolCarouselArrows';
import WorshipGroupList from './WorshipGroupList';

export default function Temples() {
  const slidesRef = useRef<SymbolCarouselRef>(null);
  const worshipGroupModal = useRef<WorshipGroupModalRef>(null);
  const [templeData, setTempleData] = useState<TempleType>(temples[0]);

  const onSlideChange = useCallback((activeSlide: number) => {
    setTempleData(temples[activeSlide]);
  }, []);

  return (
    <>
      <SectionContainer
        name={SectionName.TEMPLES}
        pt={{ base: '32px', lg: '60px' }}
        pb={{ base: '80px', lg: '120px' }}
      >
        <Box mb={{ base: '88px', lg: '0' }}>
          <Introduction />
        </Box>

        <SymbolCarouselArrows
          onLeftArrowClick={slidesRef.current?.previous}
          onRightArrowClick={slidesRef.current?.next}
          display={{ base: 'none', lg: 'block' }}
        >
          <SymbolCarousel ref={slidesRef} onSlideChange={onSlideChange} />
        </SymbolCarouselArrows>
        <Stack
          spacing={{ base: '48px', lg: '60px' }}
          direction="column"
          mt={{ base: '20px', lg: '40px' }}
        >
          <SymbolCarouselArrows
            onLeftArrowClick={slidesRef.current?.previous}
            onRightArrowClick={slidesRef.current?.next}
          >
            <FortunePoems temple={templeData} />
          </SymbolCarouselArrows>
          <Box>
            <Center
              mt={{ base: '0', lg: '30px' }}
              mb={{ base: '50px', lg: '94px' }}
            >
              <Heading
                as="h2"
                fontWeight="900"
                fontSize={{ base: '30px', lg: '40px' }}
                lineHeight={{ base: '30px', lg: '40px' }}
                w="100%"
              >
                <Box
                  h={{ base: '29px', md: '38px', lg: '38px' }}
                  position="relative"
                >
                  {/* 進香團代表 */}
                  <Image
                    src={`/images/sections/temples/worship-group-name/${templeData.name}進香團代表.svg`}
                    alt={`${templeData.name}進香團代表`}
                    style={{ height: '100%', objectFit: 'contain' }}
                    fill
                  />
                </Box>
              </Heading>
            </Center>
            <SymbolCarouselArrows
              onLeftArrowClick={slidesRef.current?.previous}
              onRightArrowClick={slidesRef.current?.next}
              isMobileFloat={false}
            >
              <WorshipGroupList
                temple={templeData}
                worshipGroupList={templeData.worshipGroups}
                onWorshipGroupClick={(worshipGroup) => {
                  worshipGroupModal.current?.open(templeData, worshipGroup);
                }}
              />
            </SymbolCarouselArrows>
          </Box>
        </Stack>
      </SectionContainer>
      <WorshipGroupModal ref={worshipGroupModal} />
    </>
  );
}
