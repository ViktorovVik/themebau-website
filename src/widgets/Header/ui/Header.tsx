import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import cn from 'clsx';
import styles from './Header.module.scss';
import { NAV_ITEMS } from '../config/navItems';
import { Logo, Socials } from '@/shared/ui';
import { BurgerButton } from './BurgerButton';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const isLight = location.pathname === '/portfolio';

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

  useEffect(() => {}, [isOpen]);

  return (
    <header className={cn(styles.header, isLight && styles.light)}>
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
          className={cn(isLight && styles.lightBurger, 'visible-mobile')}
          isOpen={isOpen}
          toggleBurgerMenu={toggleBurgerMenu}
        />
      </div>
    </header>
  );
};
