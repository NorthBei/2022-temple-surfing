import { Box, Flex, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import Image from '@components/Image';
import MapMarker from '@images/icons/icon-marker.svg';
import { EventWithRef } from 'src/data';

type EventListProps = {
  events: EventWithRef[];
  onEventClick: (event: EventWithRef) => void;
};

function EventList(props: EventListProps) {
  const { events, onEventClick } = props;

  return (
    <VStack
      spacing={{ base: '45px', lg: '72px' }}
      mt={{ base: '40px', lg: '50px' }}
    >
      {events.map((event) => {
        return (
          <Flex
            key={event.order}
            w="100%"
            maxW={{ base: '330px', lg: '530px' }}
            mx="auto"
            onClick={() => onEventClick(event)}
            cursor="pointer"
          >
            <HStack
              as="article"
              spacing={{ base: '11px', lg: '15px' }}
              p="10px"
              bg="white"
              border="1px solid"
              flex="1"
            >
              <Box
                boxSize={{ base: '100px', lg: '200px' }}
                border="1px solid"
                position="relative"
                borderRadius="5px"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  transform={{
                    base: 'translate(-35%, -52%)',
                    lg: 'translate(-25%, -47%)',
                  }}
                  w={{ base: '54px', lg: '88px' }}
                >
                  <Image
                    src={`/images/temple-symbol-${event.templeRef.shortName}.png`}
                    alt={event.templeRef.name}
                    height={136}
                    width={88}
                    placeholder="empty"
                  />
                </Box>
                <Box borderRadius="inherit" overflow="hidden">
                  <Image
                    src={`/images/活動/${event?.templeRef.shortName}/${event?.name}.jpg`}
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    alt={event.name}
                    width={200}
                    height={200}
                    placeholder="empty"
                  />
                </Box>
              </Box>
              <VStack
                spacing={{ base: '8px', lg: '22px' }}
                alignItems="flex-start"
                flex="1"
              >
                <Stack
                  spacing={{ base: '8px', lg: '10px' }}
                  direction={{ base: 'column', lg: 'row' }}
                  fontWeight="500"
                  fontSize={{ base: '14px', lg: '16px' }}
                  lineHeight={{ base: '14px', lg: '16px' }}
                >
                  <Text>{event.time1}</Text>
                  <Flex>
                    <Icon as={MapMarker} />
                    <Text>{event.location}</Text>
                  </Flex>
                </Stack>
                <Text
                  fontWeight="900"
                  fontSize={{ base: '16px', lg: '22px' }}
                  lineHeight={{ base: '20px', lg: '26px' }}
                >
                  {event.name}
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={{ base: '12px', lg: '16px' }}
                  lineHeight={{ base: '14px', lg: '16px' }}
                >
                  進香團代表｜{event.worshipGroupRef.name}
                </Text>
              </VStack>
            </HStack>
            <Box
              bg="brand.black"
              border="1px solid"
              borderColor="brand.black"
              borderLeft="none"
              p="20px 13px"
              fontWeight="900"
              fontSize="14px"
              lineHeight="18px"
              textAlign="center"
              color="white"
              alignSelf="stretch"
              style={{
                writingMode: 'vertical-lr',
              }}
            >
              我要參加
            </Box>
          </Flex>
        );
      })}
    </VStack>
  );
}

export default EventList;
