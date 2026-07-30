import { HeroAgency } from '@/pages/agency/ui/HeroAgency';
import { AgencyWork } from '@/pages/agency/ui/AgencyWork';
import { AgencyAbout } from '@/pages/agency/ui/AgencyAbout';

export const AgencyPage = () => {
  return (
    <>
      <HeroAgency />
      <AgencyWork />
      <AgencyAbout />
    </>
  );
};
