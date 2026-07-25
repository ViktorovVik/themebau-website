import img1 from '@/shared/assets/img/blog/image-1.webp';
import img3 from '@/shared/assets/img/blog/image-2.webp';
import img2 from '@/shared/assets/img/blog/image-3.webp';

export interface BlogData {
  id: string;
  date: string;
  imgBg: string;
  title: string;
  to: string;
}

export const BLOG_CARDS: BlogData[] = [
  {
    id: '1',
    date: '2020-05-12',
    imgBg: img2,
    title: 'Office explained in fewer than 100+ Characters',
    to: '/agency',
  },
  {
    id: '2',
    date: '2020-05-08',
    imgBg: img1,
    title: "This week's top Stories about Development",
    to: '/agency',
  },
  {
    id: '3',
    date: '2020-05-05',
    imgBg: img3,
    title: 'Facts about Business that you never knew',
    to: '/agency',
  },
];
