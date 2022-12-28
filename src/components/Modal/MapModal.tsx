import {
  AspectRatio,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Image from '@components/Image';
import useViewType, { ViewType } from '@hooks/useViewType';
import mapImg from '@images/sections/map/map@w2679.jpg';
import { forwardRef, useImperativeHandle } from 'react';

export type MapModalRef = {
  open: () => void;
};

const MapModal = forwardRef<MapModalRef>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const viewType = useViewType();

  useImperativeHandle(ref, () => ({
    open: onOpen,
  }));

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      allowPinchZoom={true}
      autoFocus={false}
      isCentered={[ViewType.MOBILE, ViewType.TABLET].includes(viewType)}
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent maxW={{ base: '100%', lg: '85%' }}>
        <ModalBody p="0">
          <AspectRatio ratio={847 / 600}>
            <Image
              src={mapImg}
              alt="地圖"
              unoptimized={true}
              style={{ width: '100%' }}
            />
          </AspectRatio>
        </ModalBody>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
});

MapModal.displayName = 'MapModal';

export default MapModal;
