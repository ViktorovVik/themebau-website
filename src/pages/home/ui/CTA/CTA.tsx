import styles from './CTA.module.scss';
import cn from 'clsx';
import imgCTA from '@/shared/assets/img/cta/image.jpg';
import { Link } from 'react-router';

const TITLE = 'cta-section-title';

export const CTA = () => {
  return (
    <section aria-labelledby={TITLE} className={styles.cta}>
      <div className={cn(styles.inner, 'container')}>
        <h2 id={TITLE} className={cn(styles.title, 'h2')}>
          <Link to="/agency">Let’s work together</Link>
        </h2>
        <img
          className={styles.img}
          src={imgCTA}
          alt=""
          width={230}
          height={260}
          loading="lazy"
        />
      </div>
    </section>
  );
};
