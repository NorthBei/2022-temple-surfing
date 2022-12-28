import { Box, Center, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import UnivLink, { LinkType } from '@components/UnivLink';
import RightArrow from '@images/icons/icon-arrow-right.svg';
import { TempleType } from 'src/data/index';

type FortunePoemsProps = {
  temple: TempleType;
};

function FortunePoems(props: FortunePoemsProps) {
  const { temple } = props;

  return (
    <Box
      bg={temple.color.deep}
      border="2px solid"
      p="17px"
      alignSelf="center"
      h="550px"
      maxW="100%"
      w="min-content"
    >
      <Flex
        as="article"
        flexDirection="column"
        bg="white"
        border="2px solid"
        h="100%"
      >
        <UnivLink type={LinkType.EXTERNAL} href={temple.mapLink}>
          <HStack
            spacing="18px"
            bg={temple.color.light}
            p="13px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.65)"
            justifyContent="center"
          >
            <Heading as="h2" fontWeight="900" fontSize="40px" lineHeight="40px">
              {temple.name.split('').reverse().join('')}
            </Heading>
            <Box boxSize="42px">
              <RightArrow />
            </Box>
          </HStack>
        </UnivLink>

        <HStack
          flex="1"
          borderTop="2px solid"
          borderBottom="2px solid"
          spacing="0"
          alignItems="stretch"
        >
          <Box
            fontWeight="900"
            fontSize="30px"
            lineHeight="34px"
            textAlign="center"
            p="15px"
            style={{
              writingMode: 'vertical-lr',
            }}
          >
            {temple.couplet.left}
          </Box>
          <Center
            p={{ base: '15px 18px 24px', lg: '17px 28px 25px' }}
            borderLeft="2px solid"
            borderRight="2px solid"
            style={{
              direction: 'rtl',
            }}
            flex="1"
            minW="200px"
          >
            <Flex
              alignItems="flex-start"
              justifyContent="center"
              w="min-content"
            >
              {temple.fortunePoems.sentences.map((sentence, index) => {
                return (
                  <Text
                    key={sentence}
                    pt={
                      !temple.fortunePoems.isTextAlignTop && index % 2 === 1
                        ? '20px'
                        : '0'
                    }
                    fontWeight="500"
                    fontSize="24px"
                    lineHeight="40px"
                    letterSpacing="0.2rem"
                    style={{
                      writingMode: 'vertical-lr',
                    }}
                  >
                    {sentence}
                  </Text>
                );
              })}
            </Flex>
          </Center>
          <Box
            fontWeight="900"
            fontSize="30px"
            lineHeight="34px"
            textAlign="center"
            p="15px"
            style={{
              writingMode: 'vertical-lr',
            }}
          >
            {temple.couplet.right}
          </Box>
        </HStack>
        <Box
          fontWeight="600"
          fontSize="14px"
          lineHeight="20px"
          letterSpacing="0.05rem"
          p="23px 23px 15px"
        >
          {temple.description}
        </Box>
      </Flex>
    </Box>
  );
}

export default FortunePoems;
