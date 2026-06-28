type IconName = 'facebook' | 'twitter' | 'instagram';

interface SocialLink {
  href: string;
  icon: IconName;
  label: string;
}

export const SOCIAL_ITEMS: SocialLink[] = [
  {
    href: 'https://facebook.com',
    icon: 'facebook',
    label: 'Facebook',
  },
  {
    href: 'https://twitter.com',
    icon: 'twitter',
    label: 'Twitter',
  },
  {
    href: 'https://instagram.com',
    icon: 'instagram',
    label: 'Instagram',
  },
];
