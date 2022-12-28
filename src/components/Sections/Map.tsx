import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import MapBillboard from '@components/ComputedPic/MapBillboard';
import SectionContainer from '@components/Container/SectionContainer';
import Image from '@components/Image';
import MapModal, { MapModalRef } from '@components/Modal/MapModal';
import UnivLink, { LinkType } from '@components/UnivLink';
import { SectionName } from '@const/index';
import mapImg from '@images/sections/map/map.png';
import Title from '@images/sections/map/進香地圖.svg';
import { memo, useRef } from 'react';

function Map() {
  const mapModal = useRef<MapModalRef>(null);

  return (
    <>
      <SectionContainer
        name={SectionName.MAP}
        pt={{ base: '50px', lg: '78px' }}
        pb={{ base: '64px', lg: '85px' }}
      >
        <VStack spacing={{ base: '24px', lg: '42px' }}>
          <Heading
            as="h1"
            fontWeight="900"
            fontSize={{ base: '30px', lg: '40px' }}
            lineHeight="30px"
            h={{ base: '28px', lg: '38px' }}
          >
            {/* 進香地圖 */}
            <Title style={{ height: '100%' }} />
          </Heading>
          <Text
            fontWeight="600"
            fontSize={{ base: '14px', lg: '20px' }}
            lineHeight={{ base: '22px', lg: '30px' }}
          >
            活動日期｜2022年12月10日（六） <br />
            活動時間｜上午11時至下午5時
          </Text>

          <Box
            maxW={{ base: '325px', md: '500px', lg: '850px' }}
            w={{ base: '100%', lg: '70%' }}
            onClick={() => mapModal.current?.open()}
            cursor="pointer"
          >
            <Image src={mapImg} alt="進香地圖" />
          </Box>
          <Box maxW={{ base: '288px', lg: '500px' }} w="100%">
            <UnivLink
              type={LinkType.EXTERNAL}
              href="https://goo.gl/maps/dXXxeZsCEru5NNA29"
            >
              <MapBillboard />
            </UnivLink>
          </Box>
        </VStack>
      </SectionContainer>
      <MapModal ref={mapModal} />
    </>
  );
}

export default memo(Map);
