import {
  Box,
  Center,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import IncenseBurner from '@components/ComputedPic/IncenseBurner';
import { BASIC_X_PADDING } from '@components/Container/MaxContainer';
import Image from '@components/Image';
import templeSymbolGroup from '@images/sections/temples/temple-symbol-group.png';
import Title from '@images/sections/temples/收集七種香火.svg';
import { memo } from 'react';

function Introduction() {
  return (
    <>
      <Center mb={{ base: '36px', lg: '60px' }}>
        <Heading
          as="h1"
          fontWeight="900"
          fontSize={{ base: '30px', lg: '40px' }}
          lineHeight="30px"
          h={{ base: '28px', lg: '38px' }}
        >
          <Title style={{ height: '100%' }} />
          {/* 收集七種香火 */}
        </Heading>
      </Center>
      <Stack
        spacing={{ base: '0', lg: '24px' }}
        direction={{ base: 'column', lg: 'row' }}
        alignItems="center"
      >
        <Box flex="1" zIndex="vice" ml={`-${BASIC_X_PADDING}px`}>
          <Image src={templeSymbolGroup} alt="7個寺廟的象徵圖示" />
        </Box>
        <Box flex="1">
          <VStack
            as="article"
            spacing="20px"
            fontWeight="900"
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '24px' }}
            color="brand.light"
            p={{ base: '55px 22px', lg: '120px 50px 96px' }}
            bgColor="brand.black"
            opacity="0.9"
            borderRadius="32px"
            position="relative"
          >
            <Icon
              as={IncenseBurner}
              position="absolute"
              h="233px"
              w="209px"
              top="0"
              transform="translateY(-80%)"
            ></Icon>
            <Text>
              來參加進香團的香客們！你們都肩負著傳承香火的使命。這次的任務由7間廟宇發出邀請，希望新時代的傳人們將古老的精神傳承下去。
            </Text>
            <Text>
              這次也有來自四面八方的進香團代表，包含各種有趣的文化團隊及創作者、新北的社造團隊，以及最在地的新莊傳統與潮流勢力！他們都有著十八般武藝，駐點在7間廟宇之中，等你來相會。
            </Text>
            <Text>
              準備好踏上冒險旅途了嗎！一路上Hoo~Yeah!虎爺會是你的最佳旅伴！只要收集完成7座廟的7個虎爺印章，即可獲得進香紀念小物乙份（數量有限，送完為止）。當然，這一路上即將發生的各種驚喜相遇，才是這趟旅程最令人期待的禮物！
            </Text>
          </VStack>
        </Box>
      </Stack>
    </>
  );
}

export default memo(Introduction);
