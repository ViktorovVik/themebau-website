import img1 from '@/shared/assets/img/featured/image-1.webp';
import img2 from '@/shared/assets/img/featured/image-2.webp';
import img3 from '@/shared/assets/img/featured/image-3.webp';
import img4 from '@/shared/assets/img/featured/image-4.webp';

export interface FeaturedCard {
  id: string;
  src: string;
  category: string;
  title: string;
  to: string;
  width: number;
  height: number;
  hasView?: boolean;
  size: 'small' | 'large';
}

export const FEATURED_WORKS: FeaturedCard[] = [
  {
    id: '1',
    src: img3,
    category: 'photography',
    title: 'Funny Dog',
    to: '/portfolio',
    width: 370,
    height: 428,
    size: 'small',
  },
  {
    id: '2',
    src: img2,
    category: 'branding',
    title: 'Creative Branding',
    to: '/portfolio',
    hasView: true,
    width: 600,
    height: 428,
    size: 'large',
  },
  {
    id: '3',
    src: img1,
    category: 'design',
    title: 'Mobile App',
    to: '/portfolio',
    width: 600,
    height: 428,
    size: 'large',
  },
  {
    id: '4',
    src: img4,
    category: 'design',
    title: 'Watch Design',
    to: '/portfolio',
    width: 370,
    height: 428,
    size: 'small',
  },
];
