import { Box, Center, HStack } from '@chakra-ui/react';
import { HEADER_PC_MIN_WIDTH, HeaderType, SectionName } from '@const/index';
import useViewType, { ViewType } from '@hooks/useViewType';
import { memo } from 'react';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import useHeaderType from 'src/hooks/useHeaderType';

import HeaderMarquee from './ComputedPic/HeaderMarquee';
import { CornerSize } from './Corners';
import UnivLink, { LinkType } from './UnivLink';

function Header() {
  const viewType = useViewType();
  const headerType = useHeaderType();

  return (
    <Element name="header" id="header" style={{ width: '100vw' }}>
      {headerType === HeaderType.FULL && (
        <Center minW={`${HEADER_PC_MIN_WIDTH}px`} mx="auto">
          <HStack
            as="nav"
            spacing="54px"
            mt="45px"
            fontSize="21px"
            fontWeight="700"
            lineHeight="21px"
          >
            <Link to={SectionName.STORY} spy={true} smooth={true}>
              <Box py="9px" cursor="pointer">
                來新莊進香
              </Box>
            </Link>
            <Link to={SectionName.TEMPLES} spy={true} smooth={true}>
              <Box py="9px" cursor="pointer">
                收集香火
              </Box>
            </Link>
            <Link to={SectionName.EVENTS} spy={true} smooth={true}>
              <Box py="9px" cursor="pointer">
                香客活動
              </Box>
            </Link>
            <Box>
              <HeaderMarquee />
            </Box>
            <Link to={SectionName.MAP} spy={true} smooth={true}>
              <Box py="9px" cursor="pointer">
                進香地圖
              </Box>
            </Link>
            <Link to={SectionName.NOTICE} spy={true} smooth={true}>
              <Box py="9px" cursor="pointer">
                注意事項
              </Box>
            </Link>
            <UnivLink
              type={LinkType.EXTERNAL}
              href="https://www.culture.ntpc.gov.tw/"
            >
              <Box py="9px" cursor="pointer">
                更多系列活動
              </Box>
            </UnivLink>
          </HStack>
        </Center>
      )}

      {headerType === HeaderType.COLLAPSE && (
        <Center
          maxW="100vw"
          pt="20px"
          px={{ base: CornerSize.Mobile, lg: CornerSize.PC }}
        >
          {viewType === ViewType.MOBILE ? (
            <Box px="8px" w="100%">
              <HeaderMarquee h="30px" p="3px 2px" />
            </Box>
          ) : (
            <HeaderMarquee />
          )}
        </Center>
      )}
    </Element>
  );
}

export default memo(Header);
