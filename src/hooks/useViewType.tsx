import { useMediaQuery } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';

export enum ViewType {
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  PC = 'PC',
}

function useViewType() {
  const theme = useTheme();
  const appTheme = theme as { breakpoints: { md: string; lg: string } };
  const [isMobile, isTablet] = useMediaQuery([
    `(max-width: ${appTheme.breakpoints.md})`,
    `(min-width: ${appTheme.breakpoints.md}) and (max-width: ${appTheme.breakpoints.lg})`,
  ]);

  if (isMobile) return ViewType.MOBILE;
  else if (isTablet) return ViewType.TABLET;
  else return ViewType.PC;
}

export default useViewType;
