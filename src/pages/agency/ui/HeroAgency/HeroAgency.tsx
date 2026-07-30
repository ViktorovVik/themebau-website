import cn from 'clsx';
import styles from './HeroAgency.module.scss';
import { Button } from '@/shared/ui';

const TITLE = 'agency-hero-section-title';

export const HeroAgency = () => {
  return (
    <section className={styles.hero} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <h1 id={TITLE} className={cn(styles.title, 'h2')}>
          Creative branding studio.
        </h1>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Over 10 years of combined experience, and know a thing or two
              about designing websites and mobile apps.
            </p>
          </div>
          <Button className={styles.button} type="button" variant="white">
            let&apos;s work
          </Button>
        </div>
      </div>
    </section>
  );
};
