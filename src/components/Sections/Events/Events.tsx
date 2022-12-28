import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import SectionContainer from '@components/Container/SectionContainer';
import EventModal, { EventModalRef } from '@components/Modal/EventModal';
import { SectionBackground, SectionName } from '@const/index';
import Title from '@images/sections/events/香客交流活動.svg';
import { useMemo, useRef, useState } from 'react';
import { eventsTypeKeyObj, eventTypes } from 'src/data/index';

import EventsMarquee from '../../ComputedPic/EventsMarquee';
import EventList from './EventList';
import Lantern from './Lantern';

export default function Events() {
  const eventModal = useRef<EventModalRef>(null);

  const [selectedEventType, setSelectedEventType] = useState(eventTypes[0]);

  const events = useMemo(() => {
    return eventsTypeKeyObj[selectedEventType];
  }, [selectedEventType]);

  return (
    <>
      <SectionContainer
        name={SectionName.EVENTS}
        pb={{ base: '86px', lg: '120px' }}
        bgType={SectionBackground.SOLID_RED}
        position="relative"
      >
        <Grid
          gridTemplateAreas={{
            base: `
                  "marquee marquee marquee"
                  "leftLantern title rightLantern"
                  "filter filter filter"
                `,
            md: `
                  "leftLantern title rightLantern"
                  "leftLantern marquee rightLantern"
                  "leftLantern filter rightLantern"
                `,
            lg: `
                  "leftLantern title rightLantern"
                  "leftLantern marquee rightLantern"
                  "leftLantern filter rightLantern"
                `,
          }}
          columnGap={{ base: '20px', lg: '20px' }}
          gridTemplateColumns={{
            base: 'initial',
            md: 'auto minmax(0, 1fr) auto',
            lg: 'auto minmax(0, 1fr) auto',
          }}
          gridTemplateRows={{
            base: 'initial',
            md: 'auto  auto minmax(0, 1fr)',
            lg: 'auto  auto minmax(0, 1fr)',
          }}
        >
          <GridItem area="leftLantern" justifySelf="flex-end">
            <Lantern />
          </GridItem>
          <GridItem area="rightLantern" justifySelf="flex-start">
            <Lantern />
          </GridItem>
          <GridItem area="title">
            <Center
              mt={{ base: '43px', lg: '78px' }}
              mb={{ base: '25px', lg: '33px' }}
            >
              <Heading
                as="h1"
                fontWeight="900"
                fontSize={{ base: '30px', lg: '40px' }}
                lineHeight="30px"
                h={{ base: '28px', lg: '38px' }}
              >
                <Title style={{ height: '100%' }} />
                {/* 香客交流活動 */}
              </Heading>
            </Center>
          </GridItem>
          <GridItem
            area="marquee"
            mx={{ base: 'calc(50% - 50vw)', md: 'initial', lg: 'initial' }}
            w={{ base: '100vw', md: 'initial', lg: 'initial' }}
            maxW={{ base: 'unset', lg: '100%' }}
          >
            <Center mt={{ base: '43px', md: '0', lg: '0' }}>
              <EventsMarquee />
            </Center>
          </GridItem>
          <GridItem area="filter">
            <Wrap
              spacing={{ base: '6px', lg: '20px' }}
              justify="center"
              mt={{ base: '16px', lg: '32px' }}
            >
              {eventTypes.map((type) => {
                return (
                  <WrapItem key={type}>
                    <Box
                      p="8px 14px"
                      fontWeight="900"
                      fontSize={{ base: '14px', lg: '18px' }}
                      lineHeight={{ base: '14px', lg: '18px' }}
                      borderRadius="26px"
                      textAlign="center"
                      border="1px solid"
                      borderColor={
                        type === selectedEventType
                          ? 'brand.black'
                          : 'brand.red2'
                      }
                      color={
                        type === selectedEventType
                          ? 'brand.black'
                          : 'brand.yellow2'
                      }
                      bg={type === selectedEventType ? 'white' : 'brand.red2'}
                      onClick={() => setSelectedEventType(type)}
                      cursor="pointer"
                    >
                      {type}
                      {type === selectedEventType ? '✓' : ''}
                    </Box>
                  </WrapItem>
                );
              })}
            </Wrap>
          </GridItem>
        </Grid>
        <EventList
          events={events}
          onEventClick={(event) => eventModal.current?.open(event)}
        />
      </SectionContainer>
      <EventModal ref={eventModal} />
    </>
  );
}
