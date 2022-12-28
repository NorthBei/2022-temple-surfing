import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import GodTable from '@components/ComputedPic/GodTable';
import SectionContainer from '@components/Container/SectionContainer';
import Image from '@components/Image';
import { SectionBackground, SectionName } from '@const/index';
import Title from '@images/sections/notice/進香注意事項.svg';
import { memo } from 'react';
import noticeList from 'src/data/noticeList';

function Notice() {
  return (
    <SectionContainer
      name={SectionName.NOTICE}
      bgType={SectionBackground.SOLID_RED}
      position="relative"
      pt={{ base: '50px', lg: '78px' }}
    >
      <Center flexDirection="column">
        <Heading
          as="h1"
          fontWeight="900"
          fontSize={{ base: '30px', lg: '40px' }}
          lineHeight="30px"
          h={{ base: '28px', lg: '38px' }}
        >
          {/* 進香注意事項 */}
          <Title style={{ height: '100%' }} />
        </Heading>
        <Center mt={{ base: '75px', lg: '100px' }} mb="27px">
          <Wrap
            spacingX={{ base: '10px', lg: '13px' }}
            spacingY={{ base: '55px', lg: '58px' }}
            justify="center"
            overflow="visible"
          >
            {noticeList.map((notice) => {
              return (
                <WrapItem key={notice.title}>
                  <VStack
                    as="article"
                    spacing="12px"
                    p="25px 12px 20px"
                    bg="brand.light"
                    border="2px solid"
                    borderRadius="10px"
                    boxSize={{ base: '170px', lg: '180px' }}
                    position="relative"
                  >
                    <Center
                      w="110px"
                      position="absolute"
                      top="0"
                      transform="translateY(-70%)"
                    >
                      <Box>
                        <Image
                          src={notice.image}
                          alt={`${notice.title}手勢`}
                          style={{ height: '100%', width: 'auto' }}
                        />
                      </Box>
                    </Center>
                    <Heading
                      fontWeight="900"
                      fontSize={{ base: '18px', lg: '20px' }}
                      lineHeight="18px"
                    >
                      {notice.title}
                    </Heading>
                    <Text
                      fontWeight="600"
                      fontSize={{ base: '14px', lg: '16px' }}
                      lineHeight={{ base: '22px', lg: '24px' }}
                    >
                      {notice.description}
                    </Text>
                  </VStack>
                </WrapItem>
              );
            })}
          </Wrap>
        </Center>
        <Text
          fontWeight="600"
          fontSize={{ base: '12px', lg: '14px' }}
          lineHeight={{ base: '20px', lg: '22px' }}
        >
          本活動依現行中央流行疫情指揮中心之防疫措施辦理，鼓勵民眾落實：
          <br></br>
          1. 戴口罩、勤洗手、酒精消毒<br></br>
          2. 下載臺灣社交距離APP<br></br>
        </Text>
        <Box
          mt="40px"
          w="100vw"
          maxW={{ base: '100vw', md: '100%', lg: '869px' }}
          mx={{ base: 'calc(50% - 50vw)', md: 'initial', lg: 'initial' }}
        >
          <GodTable />
        </Box>
      </Center>
    </SectionContainer>
  );
}

export default memo(Notice);
