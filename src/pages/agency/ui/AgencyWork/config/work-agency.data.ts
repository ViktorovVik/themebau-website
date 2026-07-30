import img1 from '@/shared/assets/img/agencyWork/image-1.webp';
import img2 from '@/shared/assets/img/agencyWork/image-2.webp';
import img3 from '@/shared/assets/img/agencyWork/image-3.webp';

export interface WorkAgencyData {
  id: string;
  tags: string;
  title: string;
  imgSrc: string;
  text: string;
  to: string;
}

export const WORKS_DATA: WorkAgencyData[] = [
  {
    id: '1',
    tags: 'photography - branding',
    title: 'Funny Dog',
    imgSrc: img1,
    text: "Second be seed gathering our you're one open have a morning greater their.",
    to: '/portfolio',
  },
  {
    id: '2',
    tags: 'branding - design',
    title: 'Creative Branding',
    imgSrc: img2,
    text: 'Above living made whose divide brought over fly midst signs is third their.',
    to: '/portfolio',
  },
  {
    id: '3',
    tags: 'marketing - design',
    title: 'Identity Design',
    imgSrc: img3,
    text: 'Male let likeness day. Be from called signs light form let multiply air darkness.',
    to: '/portfolio',
  },
];
