import { ReactLenis } from 'lenis/react';
import { Outlet } from 'react-router';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

export const Layout = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ReactLenis>
  );
};
