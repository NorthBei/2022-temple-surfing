import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Image from '@components/Image';
import UnivLink, { LinkType } from '@components/UnivLink';
import Link from '@images/icons/icon-link.svg';
import MapMarker from '@images/icons/icon-marker.svg';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { isEventClose, TempleType, WorshipGroupType } from 'src/data/index';

export type WorshipGroupModalRef = {
  open: (temple: TempleType, worshipGroup: WorshipGroupType) => void;
};

const WorshipGroupModal = forwardRef<WorshipGroupModalRef>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ temple, worshipGroup }, setData] = useState<{
    temple: TempleType | null;
    worshipGroup: WorshipGroupType | null;
  }>({ temple: null, worshipGroup: null });

  useImperativeHandle(ref, () => ({
    open(temple, worshipGroup) {
      setData({ temple, worshipGroup });
      onOpen();
    },
  }));

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" autoFocus={false}>
      <ModalOverlay />
      <ModalContent
        position="relative"
        p="0"
        bg="brand.light"
        border="2px solid"
        borderRadius="10px"
      >
        <Box
          position="absolute"
          top="0"
          left="50%"
          transform="translate(-50%, -60%)"
          bg={temple?.color.deep}
          border="2px solid"
          borderRadius="50px"
          minW="120px"
          p="8px"
        >
          <Text
            color="white"
            textAlign="center"
            fontWeight="900"
            fontSize="20px"
            lineHeight="20px"
          >
            {worshipGroup?.district}
          </Text>
        </Box>
        <ModalCloseButton />
        <ModalBody pt="42px" px="15px" pb="50px">
          <Center flexDirection="column">
            <Box
              as="article"
              boxSize="220px"
              border="2px solid"
              borderRadius="5px"
              overflow="hidden"
            >
              <Image
                src={`/images/進香團/${temple?.shortName}/${worshipGroup?.name}.jpg`}
                alt={worshipGroup?.name || ''}
                width={220}
                height={220}
              />
            </Box>
            <Box mt="20px" mb="18px">
              <Heading
                as="h3"
                fontWeight="900"
                fontSize="24px"
                lineHeight="24px"
              >
                {worshipGroup?.link ? (
                  <UnivLink type={LinkType.EXTERNAL} href={worshipGroup?.link}>
                    <HStack spacing="6px">
                      <Text>{worshipGroup?.name}</Text>
                      <Icon as={Link} boxSize="24px" />
                    </HStack>
                  </UnivLink>
                ) : (
                  <Text>{worshipGroup?.name}</Text>
                )}
              </Heading>
            </Box>

            <Box px="16px">
              <Box>
                <Text
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="24px"
                  textAlign="justify"
                >
                  {worshipGroup?.description}
                </Text>
              </Box>
              <VStack
                spacing="20px"
                w="100%"
                mt={worshipGroup?.events.length ? '30px' : '0'}
              >
                {worshipGroup?.events.map((event) => {
                  return (
                    <Flex
                      key={event.order}
                      w="100%"
                      minW="320px"
                      bg="white"
                      border="1px solid"
                    >
                      <HStack spacing="10px" p="10px" flex="1">
                        <Box
                          boxSize="100px"
                          border="1px solid"
                          borderRadius="5px"
                          overflow="hidden"
                        >
                          <Image
                            src={`/images/活動/${temple?.shortName}/${event.name}.jpg`}
                            alt={event.name}
                            width={100}
                            height={100}
                          />
                        </Box>
                        <VStack
                          spacing="8px"
                          fontWeight="500"
                          fontSize="14px"
                          lineHeight="14px"
                          alignItems="flex-start"
                          flex="1"
                        >
                          <Flex alignItems="center">
                            <Box boxSize="14px" mr="4px">
                              <MapMarker style={{ height: '100%' }} />
                            </Box>
                            <Text>{event?.location}</Text>
                          </Flex>
                          <Text
                            fontWeight="900"
                            fontSize="16px"
                            lineHeight="20px"
                          >
                            {event.name}
                          </Text>
                          <Box>
                            {event.time2.split('\n').map((time) => (
                              <Text key={time} lineHeight="16px">
                                {time}
                              </Text>
                            ))}
                          </Box>
                          <Text fontSize="12px"> 活動費用｜{event.price}</Text>
                        </VStack>
                      </HStack>
                      {event.isShowApplyButton && event.applyUrl && (
                        <UnivLink
                          type={
                            isEventClose ? LinkType.FUNCTION : LinkType.EXTERNAL
                          }
                          href={event.applyUrl}
                          style={{ height: 'inherit' }}
                        >
                          <Center
                            bg={temple?.color.deep}
                            borderLeft="1px solid"
                            borderColor="brand.black"
                            p="20px 13px"
                            fontWeight="900"
                            fontSize="14px"
                            lineHeight="18px"
                            textAlign="center"
                            color="white"
                            cursor="pointer"
                            h="100%"
                          >
                            <Text
                              style={{
                                writingMode: 'vertical-lr',
                              }}
                            >
                              {isEventClose ? '活動結束' : '立即報名'}
                            </Text>
                          </Center>
                        </UnivLink>
                      )}
                    </Flex>
                  );
                })}
              </VStack>
            </Box>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

WorshipGroupModal.displayName = 'WorshipGroupModal';

export default WorshipGroupModal;
