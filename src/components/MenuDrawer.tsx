import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Image from '@components/Image';
import useSmoothScroll from '@hooks/useSmoothScroll';
import governmentDepartment from '@images/menu/government-department-white-bg.png';
import MenuCloseButton from '@images/menu/menu-close-button.svg';
import menuList from 'src/data/menuList';

type MenuDrawerProps = ReturnType<typeof useDisclosure>;

export default function MenuDrawer(props: MenuDrawerProps) {
  const { isOpen, onClose } = props;
  const scrollTo = useSmoothScroll();

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      size={{ base: 'full', lg: 'sm' }}
    >
      <DrawerOverlay />
      <DrawerContent
        position="relative"
        pt="100px"
        px="50px"
        pb="30px"
        bg="linear-gradient(0deg, #FDF0E7 0%, #FBE8DE 2%, #F7C6B9 11%, #F3A99A 19.99%, #F09281 29.99%, #EE806D 41.99%, #EC735F 54.98%, #EB6C57 70.98%, #EB6A55 99.97%)"
        h={{ base: '100vh', lg: 'initial' }}
        borderRadius="none"
        m="0"
        p="0"
      >
        <Box
          boxSize="67px"
          position="absolute"
          top="0"
          right="0"
          onClick={onClose}
          cursor="pointer"
        >
          <MenuCloseButton />
        </Box>
        <DrawerBody px="50px" pt="100px">
          <Center mb="100px" px="20px">
            <VStack
              spacing="40px"
              display="inline-flex"
              alignItems="flex-start"
            >
              {menuList.map((menuItem) => {
                return (
                  <Text
                    key={menuItem.text}
                    fontWeight="900"
                    fontSize="30px"
                    lineHeight="40px"
                    onClick={() => {
                      if (menuItem.anchor) {
                        scrollTo(menuItem.anchor);
                        onClose();
                      } else if (menuItem.fn) {
                        menuItem.fn();
                      }
                    }}
                    cursor="pointer"
                  >
                    {menuItem.text}
                  </Text>
                );
              })}
            </VStack>
          </Center>
          <VStack spacing="40px" w="100%">
            <Image
              src={governmentDepartment}
              alt="新北市政府 & 新北市政府文化局"
            />
            <Text fontWeight="400" fontSize="12px" lineHeight="15px">
              Copyright © 2022 All rights reserved
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
