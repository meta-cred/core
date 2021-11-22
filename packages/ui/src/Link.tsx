import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

export type Props = Omit<
  React.ComponentProps<typeof ChakraLink>,
  keyof NextLinkProps
> &
  NextLinkProps & {
    LinkComponent?: typeof ChakraLink;
    noUnderline?: boolean;
  };

export const Link: React.FC<Props> = ({
  href,
  isExternal,
  children,
  as,
  LinkComponent = ChakraLink,
  noUnderline,
  ...props
}) => {
  if (isExternal && typeof href === 'string') {
    return (
      <LinkComponent
        isExternal
        href={href}
        {...(noUnderline ? { _hover: { textDecoration: 'none' } } : null)}
        {...props}
      >
        {children}
      </LinkComponent>
    );
  }

  return (
    <NextLink href={href} as={as} passHref>
      <LinkComponent
        {...(noUnderline ? { _hover: { textDecoration: 'none' } } : null)}
        {...props}
      >
        {children}
      </LinkComponent>
    </NextLink>
  );
};
