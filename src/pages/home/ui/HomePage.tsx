import { Hero } from './Hero';
import { About } from './About';
import { Services } from "./Services";
import  { FeaturedWork } from "./FeaturedWork";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
    </>
  );
};
