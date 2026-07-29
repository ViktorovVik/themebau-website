import cn from 'clsx';
import styles from './HeroAgency.module.scss';

const TITLE = 'agency-hero-section-title';

export const HeroPortfolio = () => {
  return (
    <section className={styles.hero} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}></div>
    </section>
  );
};
