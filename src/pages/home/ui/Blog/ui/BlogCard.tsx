import { Link } from 'react-router';
import styles from './BlogCard.module.scss';
import type { BlogData } from '../config/blog.data';
import cn from 'clsx';

type Props = Omit<BlogData, 'id'> & { className?: string };

export const BlogCard = ({ title, imgBg, date, className, to }: Props) => {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className={cn(styles.card, className)}>
      <img
        className={styles.img}
        src={imgBg}
        alt=""
        width={370}
        height={300}
        loading="lazy"
      />
      <time className={styles.date} dateTime={date}>
        {formattedDate}
      </time>
      <h3 className={styles.title}>
        <Link className={styles.cardLink} to={to}>
          {title}
        </Link>
      </h3>
    </article>
  );
};
