import styles from './Socials.module.scss';
import { SOCIAL_ITEMS } from '@/shared/ui/Socials/config/socialLinks';

export const Socials = () => {
  return (
    <ul className={styles.list}>
      {SOCIAL_ITEMS.map(({ href, label, icon }) => (
        <li key={href}>
          <a
            target="_blank"
            href={href}
            aria-label={label}
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" className={styles.iconSvg}>
              <use href={`/sprites/sprites.svg#${icon}`}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};
