import { Box, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import DragonPillarBackground from '@components/ComputedPic/DragonPillarBackground';
import SectionContainer from '@components/Container/SectionContainer';
import Image from '@components/Image';
import { SectionName } from '@const/index';
import tigerImg from '@images/sections/story/tiger.png';
import Title from '@images/sections/story/來新莊進香.svg';
import { memo } from 'react';

import { RouletteSize } from './Fold/Fold';

function Story() {
  return (
    <SectionContainer
      name={SectionName.STORY}
      pt={{
        base: RouletteSize.Mobile.Radius,
        md: RouletteSize.Pc.Radius,
        lg: RouletteSize.Pc.Radius,
      }}
      pb={{ base: '29px', lg: '56px' }}
      position="relative"
    >
      <DragonPillarBackground
        width="33px"
        gap="12px"
        containerStyle={{
          position: 'absolute',
          top: '0',
          zIndex: 'background',
          display: { base: 'block', md: 'none', lg: 'none' },
        }}
        pillarStyle={{
          top: '33%',
        }}
      />
      <Center
        pt={{ base: '20px', lg: '90px' }}
        mb={{ base: '25px', lg: '93px' }}
      >
        <Heading
          as="h1"
          fontWeight="900"
          fontSize={{ base: '30px', lg: '40px' }}
          lineHeight="30px"
          h={{ base: '39px', lg: '56px' }}
        >
          {/* 來新莊進香 */}
          <Title style={{ height: '100%' }} />
        </Heading>
      </Center>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '-40px', lg: '30px' }}
        alignItems="center"
      >
        <Center flex="1" w={{ base: '210px', lg: '430px' }}>
          <Image src={tigerImg} alt="虎爺" />
        </Center>
        <Box
          flex="1"
          background="brand.red3"
          border="2px solid"
          borderRadius="32px"
          p={{ base: '12px 10px', lg: '18px' }}
          zIndex={{ base: 'vice', lg: 'initial' }}
        >
          <VStack
            as="article"
            spacing="20px"
            fontWeight="900"
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '24px' }}
            bg="brand.light"
            border="2px solid"
            borderRadius="32px"
            p={{ base: '52px 20px 46px', lg: '65px' }}
          >
            <Text>
              你知道新北市有一個神秘的地方，眾神聚集，短短一條街，卻有超過10座廟宇。
            </Text>
            <Text>
              這裡就是座落於大漢溪旁的「新莊廟街」。300多年前，不同族群紛紛聚集開墾於此，開啟了大臺北最早的發展。清朝時期還有「千帆林立新莊港，市肆聚千家燈火」的熱鬧光景。
            </Text>
            <Text>
              隨時代更迭，留下了許多廟宇，依舊香火不斷，傳承著古老的精神。
            </Text>
            <Text>
              這次我們將在這條古老的街道上，召集來自新北各社區的人們，與新莊在地團隊一起來進香交流！傳承及點旺香火，掀起新時代的浪潮。
            </Text>
          </VStack>
        </Box>
      </Stack>
    </SectionContainer>
  );
}

export default memo(Story);
