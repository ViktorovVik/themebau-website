import { Link } from 'react-router';
import cn from 'clsx';
import styles from './ValueCard.module.scss';
import type { ValuesData } from '../config/values.data';

type Props = Omit<ValuesData, 'id'> & { className?: string };

export const ValueCard = ({ title, className, to, text, iconId }: Props) => {
  return (
    <article className={cn(styles.card, className)}>
      <svg aria-hidden="true" className={styles.icon}>
        <use href={`/sprites/sprites.svg#${iconId}`} />
      </svg>
      <div className={styles.content}>
        <h3 className={cn(styles.title, 'h6')}>
          <Link className={styles.cardLink} to={to}>
            {title}
          </Link>
        </h3>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
        <span className={styles.readMore}>
          read more
          <svg aria-hidden="true" className={styles.arrow}>
            <use href="/sprites/sprites.svg#arrow" />
          </svg>
        </span>
      </div>
    </article>
  );
};
