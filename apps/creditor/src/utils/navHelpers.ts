import { NavItemProps } from '@meta-cred/ui/NavItem';

export enum DaoRoute {
  CONTRIBUTIONS = 'Contributions',
  MEMBERS = 'Members',
}

export const getNavItemsForDao = (
  daoName: string | undefined,
  activeRoute: DaoRoute,
): NavItemProps[] =>
  daoName
    ? [
        {
          label: DaoRoute.CONTRIBUTIONS,
          href: `/d/${daoName}`,
          active: activeRoute === DaoRoute.CONTRIBUTIONS,
        },
        {
          label: DaoRoute.MEMBERS,
          href: `/d/${daoName}/members`,
          active: activeRoute === DaoRoute.MEMBERS,
        },
      ]
    : [];
