import { useMatches } from 'react-router';

type HeaderTheme = 'light' | 'dark';
type HandleMatch = {
  theme?: HeaderTheme;
  transparent?: boolean;
};

const isHandleMatch = (handle: unknown): handle is HandleMatch => {
  return handle !== null && typeof handle === 'object';
};

export const useHeaderConfig = () => {
  const matches = useMatches();

  const routeHandle = matches.at(-1)?.handle;

  return {
    theme: 'dark',
    transparent: false,
    ...(isHandleMatch(routeHandle) && routeHandle),
  };
};
