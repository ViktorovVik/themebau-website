import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { FeaturedWork } from './FeaturedWork';
import { WorkProcess } from './WorkProcess';
import { Create } from "./Create";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <WorkProcess />
      <Create />
    </>
  );
};
