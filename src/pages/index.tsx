import { Box } from '@chakra-ui/react';
import DragonPillarBackground from '@components/ComputedPic/DragonPillarBackground';
import Corners from '@components/Corners';
import Footer from '@components/Footer';
import Events from '@components/Sections/Events';
import Fold from '@components/Sections/Fold';
import Map from '@components/Sections/Map';
import Notice from '@components/Sections/Notice';
import Story from '@components/Sections/Story';
import Temples from '@components/Sections/Temples';
import useViewType, { ViewType } from '@hooks/useViewType';
import Head from 'next/head';

export default function Home() {
  const viewType = useViewType();

  return (
    <>
      <Head>
        <title>新莊進香團 Temple Surfing - 2022 藝起來新莊串門子</title>
      </Head>
      {[ViewType.TABLET, ViewType.PC].includes(viewType) && (
        <DragonPillarBackground />
      )}

      <Corners />
      <Box as="main" id="main">
        <Fold />
        <Story />
        <Temples />
        <Events />
        <Map />
        <Notice />
        <Footer />
      </Box>
    </>
  );
}
