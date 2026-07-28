import { HeroPortfolio } from './HeroPortfolio';
import { Projects } from './Projects';
import { PortfolioCTA } from '@/pages/portfolio/ui/PortfolioCTA';

export const PortfolioPage = () => {
  return (
    <>
      <HeroPortfolio />
      <Projects />
      <PortfolioCTA />
    </>
  );
};
