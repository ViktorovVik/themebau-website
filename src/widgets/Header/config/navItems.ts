interface NavItem {
  path: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/portfolio',
    label: 'projects',
  },
  {
    path: '/agency',
    label: 'agency',
  },
];
