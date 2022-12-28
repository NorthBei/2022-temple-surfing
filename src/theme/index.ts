import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    // base ~ md -> 手機
    // md ~ lg -> 平板
    // lg ~ -> 電腦
    // 設計上以手機跟電腦為主．平板預設會繼承手機的style, 再加上一些自己的config
    md: '700px',
    lg: '1100px',
  },
  colors: {
    brand: {
      black: '#1E1E1E',
      red: '#EB6A55',
      red2: '#E6573B',
      red3: '#EF867B',
      red5: '#F9D5BE',
      yellow2: '#FFDA00',
      light: '#FDF0E7',
    },
    blackAlpha: {
      600: 'rgba(0,0,0,0.75)',
    },
  },
  zIndices: {
    background: -10,
    vice: -8, //vice content
    pillars: -5,
    // hide: -1,
    // auto: 'auto',
    // base: 0,
    main: 1, //main content
    corners: 5,
    // docked: 10,
    // dropdown: 1000,
    // sticky: 1100,
    // banner: 1200,
    // overlay: 1300,
    // modal: 1400,
    // popover: 1500,
    // skipLink: 1600,
    // toast: 1700,
    // tooltip: 1800,
  },
  styles: {
    global: {
      body: {
        color: 'brand.black',
        borderColor: 'brand.black',
      },
    },
  },
});

export default theme;
