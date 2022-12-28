import { useMediaQuery } from '@chakra-ui/react';
import { HEADER_PC_MIN_WIDTH, HeaderType } from '@const/index';

function useHeaderType() {
  const [isLessThan1440] = useMediaQuery(
    `(max-width: ${HEADER_PC_MIN_WIDTH}px)`
  );

  return isLessThan1440 ? HeaderType.COLLAPSE : HeaderType.FULL;
}

export default useHeaderType;
