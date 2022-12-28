import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { CSSProperties, ReactNode } from 'react';

export enum LinkType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL',
  FUNCTION = 'FUNCTION',
}

type UnivLinkProps = {
  type?: LinkType;
  href: string;
  style?: CSSProperties;
  onClick?: () => void;
  children: ReactNode;
};

function UnivLink(props: UnivLinkProps) {
  const { type, href, style, onClick, children } = props;

  if (type === LinkType.INTERNAL) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="cursorPointer"
        style={{ cursor: 'pointer', ...style }}
      >
        {children}
      </Link>
    );
  } else if (type === LinkType.EXTERNAL) {
    return (
      <a
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        target="_blank"
        className="cursorPointer"
        style={style}
      >
        {children}
      </a>
    );
  } else if (type === LinkType.FUNCTION) {
    return (
      <Box onClick={onClick} cursor="pointer" style={style}>
        {children}
      </Box>
    );
  }

  throw new Error(
    'LinkType not correct. only accept INTERNAL EXTERNAL FUNCTION'
  );
}

UnivLink.defaultProps = {
  type: LinkType.EXTERNAL,
};

export default UnivLink;
