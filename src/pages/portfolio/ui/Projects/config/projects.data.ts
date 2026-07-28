import img1 from '@/shared/assets/img/projects/image-1.webp';
import img2 from '@/shared/assets/img/projects/image-2.webp';
import img3 from '@/shared/assets/img/projects/image-3.webp';
import img4  from '@/shared/assets/img/projects/image-4.webp';
import img5 from '@/shared/assets/img/projects/image-5.webp';
import img6 from '@/shared/assets/img/projects/image-6.webp';
import img7 from '@/shared/assets/img/projects/image-7.webp';
import img8 from '@/shared/assets/img/projects/image-8.webp';
import img9 from '@/shared/assets/img/projects/image-9.webp';




type Category =  'marketing' | 'branding' | 'design' | 'photography';
export type Filter = Category | 'all';


export interface ProjectsData {
  id: string;
  imgSrc: string;
  category: Category;
  to: string;
  title: string;
}

interface CategoryData {
  id: string;
  label: string;
  filterValue: Filter;
}

export const CATEGORIES: CategoryData[] = [
  {
    id: '1',
    label: "all projects",
    filterValue: 'all',
  },
  {
    id: '2',
    label: "branding",
    filterValue: 'branding',
  },
  {
    id: '3',
    label: "design",
    filterValue: 'design',
  },
  {
    id: '4',
    label: "photography",
    filterValue: 'photography',
  },
  {
    id: '5',
    label: "marketing",
    filterValue: 'marketing',
  },
]

export const PROJECTS: ProjectsData[] = [
  {
    id: '1',
    imgSrc: img1,
    category: 'marketing',
    to: '/agency',
    title: 'Good Marketing',
  },
  {
    id: '2',
    imgSrc: img2,
    category: 'photography',
    to: '/agency',
    title: 'Good Photography',
  },
  {
    id: '3',
    imgSrc: img3,
    category: 'marketing',
    to: '/agency',
    title: 'Good Marketing',
  },
  {
    id: '4',
    imgSrc: img4,
    category: 'design',
    to: '/agency',
    title: 'Creative Design',
  },
  {
    id: '5',
    imgSrc: img5,
    category: 'branding',
    to: '/agency',
    title: 'Creative Branding',
  },
  {
    id: '6',
    imgSrc: img6,
    category: 'branding',
    to: '/agency',
    title: 'Creative Branding',
  },
  {
    id: '7',
    imgSrc: img7,
    category: 'design',
    to: '/agency',
    title: 'Good Design',
  },
  {
    id: '8',
    imgSrc: img9,
    category: 'photography',
    to: '/agency',
    title: 'Good Photography',
  },
  {
    id: '9',
    imgSrc: img8,
    category: 'marketing',
    to: '/agency',
    title: 'Good Marketing',
  },
]