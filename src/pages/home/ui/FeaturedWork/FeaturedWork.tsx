import { FEATURED_WORKS } from '@/pages/home/ui/FeaturedWork/config/featured.data';
import styles from './FeaturedWork.module.scss';
import { FeaturedWorkCard } from '@/pages/home/ui/FeaturedWork/ui/FeaturedWorkCard.tsx';
import cn from 'clsx';
import { Button } from '@/shared/ui';

const TITLE = 'featured-title';

export const FeaturedWork = () => {
  return (
    <section className={styles.featured} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <div className={styles.top}>
          <h2 id={TITLE} className={cn(styles.title, 'h2')}>
            Featured work
          </h2>
          <span className={styles.line}></span>
          <Button to="/portfolio">
            all work <span className={styles.dot}></span>
          </Button>
        </div>
        <ul className={styles.list}>
          {FEATURED_WORKS.map(
            ({
              id,
              src,
              category,
              title,
              to,
              width,
              height,
              size,
              hasView,
            }) => (
              <li className={styles.item} key={id}>
                <FeaturedWorkCard
                  className={styles.card}
                  src={src}
                  category={category}
                  size={size}
                  hasView={hasView}
                  title={title}
                  to={to}
                  width={width}
                  height={height}
                />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};
