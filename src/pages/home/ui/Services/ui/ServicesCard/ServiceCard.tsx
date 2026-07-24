import { type ServicesCard } from '../../config/services.data';
import styles from './ServiceCard.module.scss';
import { Button } from '@/shared/ui';

type Props = Omit<ServicesCard, 'id'>;

export const ServiceCard = ({ src, iconId, title, to }: Props) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.cardImg}
        src={src}
        alt=""
        width={304}
        height={400}
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <svg aria-hidden="true" className={styles.iconSvg}>
          <use href={`/sprites/sprites.svg#${iconId}`}></use>
        </svg>
        <h3 className={styles.cardTitle}>{title}</h3>
        <Button className={styles.cardLink} variant="transparent" to={to}>
          read more
          <svg aria-hidden="true" className={styles.arrow}>
            <use href="/sprites/sprites.svg#arrow" />
          </svg>
        </Button>
      </div>
    </article>
  );
};
