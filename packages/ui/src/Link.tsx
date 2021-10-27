import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

export type Props = Omit<
  React.ComponentProps<typeof ChakraLink>,
  keyof NextLinkProps
> &
  NextLinkProps & {
    LinkComponent?: typeof ChakraLink;
  };

export const Link: React.FC<Props> = ({
  href,
  isExternal,
  children,
  as,
  LinkComponent = ChakraLink,
  ...props
}) => {
  if (isExternal && typeof href === 'string') {
    return (
      <LinkComponent isExternal href={href} {...props}>
        {children}
      </LinkComponent>
    );
  }

  return (
    <NextLink href={href} as={as} passHref>
      <LinkComponent {...props}>{children}</LinkComponent>
    </NextLink>
  );
};
