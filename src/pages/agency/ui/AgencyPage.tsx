import { HeroAgency } from '@/pages/agency/ui/HeroAgency';
import { AgencyWork } from '@/pages/agency/ui/AgencyWork';
import { AgencyAbout } from '@/pages/agency/ui/AgencyAbout';
import { AgencyVideo } from '@/pages/agency/ui/AgencyVideo';

export const AgencyPage = () => {
  return (
    <>
      <HeroAgency />
      <AgencyWork />
      <AgencyAbout />
      <AgencyVideo />
    </>
  );
};
