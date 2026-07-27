import cn from 'clsx';
import styles from './HeroPortfolio.module.scss';
import deco from '@/shared/assets/deco/1.svg';
import { Button } from '@/shared/ui';

const TITLE = 'portfolio-hero-section-title';

export const HeroPortfolio = () => {
  return (
    <section className={styles.hero} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <img
          className={styles.deco}
          src={deco}
          alt=""
          width={641}
          height={641}
          aria-hidden="true"
        />
        <h1 id={TITLE} className={cn(styles.title, 'h1')}>
          An award-winning digital studio ✌️
        </h1>
        <Button type="button">let’s work</Button>
      </div>
    </section>
  );
};
