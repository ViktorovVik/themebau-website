import { NavLink } from 'react-router';
import styles from './Header.module.scss';
import { NAV_ITEMS } from '@/widgets/Header/config/navItems';
import { Logo, Socials } from '@/shared/ui';
import cn from 'clsx';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner}  container`}>
        <Logo />
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
    </header>
  );
};
