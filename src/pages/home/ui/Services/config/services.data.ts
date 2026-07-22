import img1 from "@/shared/assets/img/services/image-3.webp";
import img2 from "@/shared/assets/img/services/image-2.webp";
import img3 from "@/shared/assets/img/services/image-1.webp";
import img4 from "@/shared/assets/img/services/image-4.webp";


export interface ServicesCard {
  id: string;
  src: string;
  iconId: string;
  title: string;
  to: string;

}

export const SERVICES: ServicesCard[] = [
  {
    id: '1',
    src: img1,
    iconId: 'design',
    title: 'Web Design and Development',
    to: '/agency'
  },
  {
    id: '2',
    src: img2,
    iconId: 'strategy',
    title: 'Brand Strategy Accelerator',
    to: '/agency'
  },
  {
    id: '3',
    src: img3,
    iconId: 'brand',
    title: 'Packaging and Brand Identity',
    to: '/agency'
  },
  {
    id: '4',
    src: img4,
    iconId: 'content',
    title: 'Content Production',
    to: '/agency'
  },
]