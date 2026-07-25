import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { FeaturedWork } from './FeaturedWork';
import { WorkProcess } from './WorkProcess';
import { Create } from './Create';
import { Values } from '@/pages/home/ui/Values';
import { Feedback } from '@/pages/home/ui/Feedback';
import { Blog } from '@/pages/home/ui/Blog';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <WorkProcess />
      <Create />
      <Values />
      <Feedback />
      <Blog />
    </>
  );
};
