interface FooterLink {
  label: string;
  to: string;
}

interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export const FOOTER_LINKS: FooterColumn[] = [
  {
    id: '1',
    title: 'About us',
    links: [
      {
        label: 'Services',
        to: '/agency',
      },
      {
        label: 'Careers',
        to: '/agency',
      },
      {
        label: 'Our team',
        to: '/agency',
      },
    ],
  },
  {
    id: '2',
    title: 'Work process',
    links: [
      {
        label: 'FAQ',
        to: '/agency',
      },
      {
        label: 'Our blog',
        to: '/',
      },
      {
        label: 'Contacts',
        to: '/',
      },
    ],
  },
  {
    id: '3',
    title: 'Privacy',
    links: [
      {
        label: 'Terms of use',
        to: '/agency',
      },
    ],
  },
];
