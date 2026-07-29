import { useEffect, useState } from 'react';
import { NavLink, useLocation, useMatches } from 'react-router';
import cn from 'clsx';
import styles from './Header.module.scss';
import { NAV_ITEMS } from '../config/navItems';
import { Logo, Socials } from '@/shared/ui';
import { BurgerButton } from './BurgerButton';

type HeaderTheme = 'light' | 'dark';
type HandleMatch = {
  theme?: HeaderTheme;
  transparent?: boolean;
};

const isHandleMatch = (handle: unknown): handle is HandleMatch => {
  return handle !== null && typeof handle === 'object';
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const matches = useMatches();

  const routeHandle = matches.at(-1)?.handle;

  const headerConfig = {
    theme: 'dark',
    transparent: false,
    ...(isHandleMatch(routeHandle) && routeHandle),
  };

  const toggleBurgerMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('is-lock');
    } else {
      document.documentElement.classList.remove('is-lock');
    }

    return () => {
      document.documentElement.classList.remove('is-lock');
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        styles.header,
        headerConfig.theme === 'light' && styles.light,
        headerConfig.transparent && styles.transparent,
      )}
    >
      <div className={cn(styles.headerInner, 'container')}>
        <Logo />
        <div className={cn(styles.overlay, isOpen && styles.open)}>
          <div className={styles.contentWrapper}>
            <nav>
              <ul className={styles.navList}>
                {NAV_ITEMS.map(({ path, label }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        cn(styles.link, isActive && styles.active)
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Socials />
          </div>
        </div>
        <BurgerButton
          className={cn(
            headerConfig.theme === 'light' && styles.lightBurger,
            'visible-mobile',
          )}
          isOpen={isOpen}
          toggleBurgerMenu={toggleBurgerMenu}
        />
      </div>
    </header>
  );
};
