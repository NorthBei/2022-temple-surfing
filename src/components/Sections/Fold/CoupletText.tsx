import { SystemProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type CoupletTextProps = {
  children: ReactNode;
} & SystemProps;

export default function CoupletText(props: CoupletTextProps) {
  const { children, ...systemProps } = props;
  return (
    <Text
      fontWeight="900"
      fontSize={{ base: '12px', lg: '28px' }}
      lineHeight={{ base: '14px', lg: '32px' }}
      p={{ base: 'initial', lg: '20px 10px' }}
      bg={{ base: 'initial', lg: 'brand.light' }}
      border={{ base: 'none', lg: '2px solid' }}
      borderRadius="100px"
      style={{
        writingMode: 'vertical-rl',
      }}
      {...systemProps}
    >
      {children}
    </Text>
  );
}
