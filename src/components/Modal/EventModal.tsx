import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Image from '@components/Image';
import UnivLink, { LinkType } from '@components/UnivLink';
import MapMarker from '@images/icons/icon-marker.svg';
import isDarkColor from 'is-dark-color';
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { EventWithRef, isEventClose } from 'src/data';

export type EventModalRef = {
  open: (eventWithRef: EventWithRef | null) => void;
};

const EventModal = forwardRef<EventModalRef>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventWithRef, setEventWithRef] = useState<EventWithRef | null>(null);

  useImperativeHandle(ref, () => ({
    open(eventWithRef) {
      setEventWithRef(eventWithRef);
      onOpen();
    },
  }));

  const contrastColor = useMemo(() => {
    // default font color is brand.black (#1E1E1E)
    return isDarkColor(eventWithRef?.templeRef?.color.deep || '#1E1E1E')
      ? 'white'
      : 'inherit';
  }, [eventWithRef]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" autoFocus={false}>
      <ModalOverlay />
      <ModalContent
        position="relative"
        p="50px 0 0"
        bg="brand.light"
        border="2px solid"
        borderRadius="10px"
      >
        <Box
          w="80px"
          position="absolute"
          top="0"
          left="50%"
          transform="translate(-50%, -55%)"
        >
          <Image
            src={`/images/temple-symbol-${eventWithRef?.templeRef.shortName}.png`}
            alt={eventWithRef?.templeRef.name || ''}
            height={124}
            width={80}
            placeholder="empty"
          />
        </Box>
        <ModalCloseButton />
        <ModalBody px="27px" pb="30px">
          <Center flexDirection="column">
            <Box
              as="article"
              boxSize="220px"
              mb="20px"
              border="2px solid"
              borderRadius="5px"
              overflow="hidden"
            >
              <Image
                src={`/images/活動/${eventWithRef?.templeRef.shortName}/${eventWithRef?.name}.jpg`}
                alt={eventWithRef?.name || ''}
                width={220}
                height={220}
              />
            </Box>
            <Heading as="h3" fontWeight="900" fontSize="24px" lineHeight="30px">
              {eventWithRef?.name || ''}
            </Heading>

            {!eventWithRef?.isShowLocationText ? (
              <Flex my="10px" alignItems="center">
                <UnivLink
                  type={LinkType.EXTERNAL}
                  href={eventWithRef?.templeRef.mapLink || ''}
                >
                  <Flex
                    display="inline-flex"
                    alignItems="center"
                    bg={eventWithRef?.templeRef?.color.deep || 'none'}
                    color={contrastColor}
                    borderRadius="26px"
                    boxShadow="2px 2px 0px rgba(0, 0, 0, 0.7)"
                    border="1px solid"
                    borderColor="brand.black"
                    p="9px 15px"
                  >
                    <Box boxSize="14px" mr="3px">
                      <MapMarker />
                    </Box>
                    {eventWithRef?.location || ''}
                  </Flex>
                </UnivLink>
              </Flex>
            ) : (
              <Box h="10px"></Box>
            )}
          </Center>
          <Box fontWeight="900" fontSize="14px" lineHeight="24px">
            <Flex>
              <Text>活動時間｜</Text>
              <VStack flex="1" spacing="0px" alignItems="flex-start">
                {eventWithRef?.time3.split('\n').map((time) => {
                  return (
                    <Text flex="1" key={time}>
                      {time}
                    </Text>
                  );
                })}
              </VStack>
            </Flex>
            <Flex>
              <Text>進香團代表｜</Text>
              <Text>{eventWithRef?.worshipGroupRef.name || ''}</Text>
            </Flex>
            {eventWithRef?.isShowLocationText && (
              <Flex>
                <Text>集合地點｜</Text>
                <Text>{eventWithRef?.location || ''}</Text>
              </Flex>
            )}
            <Flex>
              <Text>活動費用｜</Text>
              <Text>{eventWithRef?.price || ''}</Text>
            </Flex>
            <Flex direction="column">
              <Text mb="10px">活動介紹｜</Text>
              {(eventWithRef?.description.split('\n') || []).map((text) => {
                return (
                  <Text key={text} lineHeight="21px">
                    {text}
                  </Text>
                );
              })}
            </Flex>
          </Box>
        </ModalBody>
        {eventWithRef?.isShowApplyButton && eventWithRef.applyUrl && (
          <ModalFooter
            p="0"
            overflow="hidden"
            borderRadius="8px"
            borderTopRadius="none"
          >
            <UnivLink
              type={isEventClose ? LinkType.FUNCTION : LinkType.EXTERNAL}
              href={eventWithRef.applyUrl}
              style={{ width: '100%' }}
            >
              <Button
                pt="10px"
                pb="15px"
                fontWeight="900"
                fontSize="24px"
                lineHeight="24px"
                w="100%"
                bg={eventWithRef?.templeRef.color.deep || 'none'}
                color={contrastColor}
                _hover={{
                  bg: eventWithRef?.templeRef.color.light || 'none',
                }}
                borderTop="2px solid"
                borderColor="brand.black"
                borderRadius="none"
              >
                {isEventClose ? '活動結束' : '立即報名'}
              </Button>
            </UnivLink>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});

EventModal.displayName = 'EventModal';

export default EventModal;
