import { Box, Center, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import Image from '@components/Image';
import { TempleType, WorshipGroupType } from 'src/data';

type WorshipGroupListProps = {
  temple: TempleType;
  worshipGroupList: WorshipGroupType[];
  onWorshipGroupClick: (worshipGroup: WorshipGroupType) => void;
};

enum WorshipGroupItemSize {
  MOBILE = 150,
  PC = 200,
}

function WorshipGroupList(props: WorshipGroupListProps) {
  const { temple, worshipGroupList, onWorshipGroupClick } = props;

  return (
    <Center w="100%">
      <Grid
        w="100%"
        columnGap={{ base: '15px', lg: '40px' }}
        rowGap={{ base: '35px', lg: '50px' }}
        gridTemplateColumns={{
          // base: `repeat(auto-fill, minmax(0 ,${WorshipGroupItemSize.MOBILE}px))`,
          // lg: `repeat(auto-fill, minmax(0 ,${WorshipGroupItemSize.PC}px))`,
          // https://stackoverflow.com/questions/52417889/setting-minimum-and-maximum-number-of-columns-using-css-grid
          base: `repeat(auto-fit, minmax(0, min(100%/2, max(${WorshipGroupItemSize.MOBILE}px, 100%/6))))`,
          lg: `repeat(auto-fit, minmax(0, min(100%/2, max(${WorshipGroupItemSize.PC}px, 100%/6))))`,
        }}
        justifyContent="center"
      >
        {worshipGroupList.map((worshipGroup) => {
          return (
            <GridItem
              key={worshipGroup.name}
              w={{
                base: `${WorshipGroupItemSize.MOBILE}px`,
                lg: `${WorshipGroupItemSize.PC}px`,
              }}
            >
              <VStack spacing="10px">
                <Box
                  position="relative"
                  onClick={() => onWorshipGroupClick(worshipGroup)}
                  cursor="pointer"
                >
                  <Box
                    position="absolute"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    p={{ base: '4px', lg: '9px' }}
                    minW={{ base: '54px', lg: '115px' }}
                    textAlign="center"
                    bg={temple.color.deep}
                    borderRadius="24px"
                    overflow="hidden"
                    color="white"
                    fontWeight="900"
                    fontSize={{ base: '14px', lg: '21px' }}
                    lineHeight={{ base: '14px', lg: '21px' }}
                    border="2px solid"
                    borderColor="brand.black"
                    zIndex="1"
                  >
                    {worshipGroup.district}
                  </Box>
                  <Box
                    boxSize={{
                      base: `${WorshipGroupItemSize.MOBILE}px`,
                      lg: `${WorshipGroupItemSize.PC}px`,
                    }}
                    border="2px solid"
                    borderRadius="5px"
                    overflow="hidden"
                    boxShadow="4px 4px 0 rgba(0,0,0,0.7)"
                  >
                    <Image
                      src={`/images/進香團/${temple.shortName}/${worshipGroup.name}.jpg`}
                      width={WorshipGroupItemSize.PC}
                      height={WorshipGroupItemSize.PC}
                      alt={worshipGroup.name}
                      placeholder="empty"
                    />
                  </Box>
                </Box>
                <Center>
                  <Text
                    fontWeight="900"
                    fontSize={{ base: '16px', lg: '20px' }}
                    lineHeight={{ base: '24px', lg: '32px' }}
                    textAlign="center"
                  >
                    {worshipGroup.name}
                  </Text>
                </Center>
              </VStack>
            </GridItem>
          );
        })}
      </Grid>
    </Center>
  );
}

export default WorshipGroupList;
