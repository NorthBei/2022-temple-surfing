import { Box, SystemProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SymbolCarouselArrowWrapperProps = {
  children: ReactNode;
  onClick?: () => void;
  isMobileFloat?: boolean;
} & SystemProps;

function SymbolCarouselArrowWrapper(props: SymbolCarouselArrowWrapperProps) {
  const { children, onClick, isMobileFloat, ...systemProps } = props;

  return (
    <Box
      position={{ base: isMobileFloat ? 'absolute' : 'static', lg: 'static' }}
      top="50%"
      transform={{
        base: isMobileFloat ? 'translateY(-50%)' : 'none',
        lg: 'none',
      }}
      w={{ base: '24px', lg: '52px' }}
      py={{ base: '20px', lg: '0' }}
      cursor="pointer"
      onClick={onClick}
      {...systemProps}
    >
      {children}
    </Box>
  );
}

export default SymbolCarouselArrowWrapper;
