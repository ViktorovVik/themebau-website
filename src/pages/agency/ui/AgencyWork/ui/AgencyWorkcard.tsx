import styles from './AgencyWorkCard.module.scss';
import { Button } from '@/shared/ui';
import cn from 'clsx';

interface CardProps {
  tags: string;
  imgSrc: string;
  title: string;
  text: string;
  to: string;
  reversed?: boolean;
}

export const AgencyWorkCard = ({
  tags,
  imgSrc,
  title,
  text,
  to,
  reversed,
}: CardProps) => {
  return (
    <article className={cn(styles.card, reversed && styles.reversed)}>
      <div className={styles.leftCol}>
        <span className={styles.tags}>{tags}</span>
        <img src={imgSrc} alt="" width={670} height={430} loading="lazy" />
      </div>
      <div className={styles.rightCol}>
        <span aria-hidden className={styles.line}></span>
        <h3 className={cn(styles.title, 'h3')}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <Button className={styles.button} variant="transparent" to={to}>
          view project
          <svg aria-hidden className={styles.arrow}>
            <use href="/sprites/sprites.svg#arrow" />
          </svg>
        </Button>
      </div>
    </article>
  );
};
