import { Box, Center, Text } from '@chakra-ui/react';
import Image from '@components/Image';
import governmentDepartment from '@images/sections/footer/government-department-black-bg.png';
import { memo } from 'react';

function Footer() {
  return (
    <Center
      as="footer"
      bg="brand.black"
      pt={{ base: '42px', lg: '46px' }}
      pb={{ base: '26px', lg: '30px' }}
      px={{ base: '36px', lg: '30px' }}
      color="white"
    >
      <Center flexDirection="column" maxW="915px">
        <Box h={{ base: '28px', lg: '55px' }}>
          <Image
            src={governmentDepartment}
            alt="新北市政府 & 新北市政府文化局"
            style={{
              height: '100%',
              width: 'auto',
            }}
          />
        </Box>
        <Box mt="27px" mb={{ base: '25px', lg: '17px' }}>
          <Text
            fontWeight="700"
            fontSize="16px"
            lineHeight="24px"
            textAlign="center"
          >
            客服信箱｜templesurfing@gmail.com
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="400"
            fontSize={{ base: '12px', lg: '14px' }}
            lineHeight={{ base: '18px', lg: '24px' }}
            textAlign="center"
          >
            感謝新北市新莊區公所、新莊慈祐宮、武聖廟、保元宮、潮江寺、廣福宮、文昌祠、地藏庵、福德祠、慈惠堂、全安宮、新莊區農會、新莊廟街發展協會、永豐銀行、透南風文化創意有限公司、金曲歌王謝銘祐、麵包車樂團等單位鼎力相助。
          </Text>
        </Box>
        <Text
          fontWeight="400"
          fontSize={{ base: '12px', lg: '14px' }}
          lineHeight={{ base: '15px', lg: '17px' }}
        >
          Copyright © 2022 All rights reserved
        </Text>
      </Center>
    </Center>
  );
}

export default memo(Footer);
