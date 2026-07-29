import { createBrowserRouter } from 'react-router';
import { Layout } from '@/app/layouts';
import { HomePage } from '@/pages/home';
import { AgencyPage } from '@/pages/agency';
import { PortfolioPage } from '@/pages/portfolio';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'agency',
        element: <AgencyPage />,
        handle: {
          transparent: true,
        },
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
        handle: {
          theme: 'light',
        },
      },
    ],
  },
]);
