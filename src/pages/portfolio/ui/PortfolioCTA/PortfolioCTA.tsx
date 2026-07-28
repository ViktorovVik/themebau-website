import styles from './PortfolioCTA.module.scss';
import cn from 'clsx';
import { Button } from '@/shared/ui/Button';

const TITLE = 'cta-title';

export const PortfolioCTA = () => {
  return (
    <section className={styles.cta} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <h2 id={TITLE} className={cn(styles.title, 'h5')}>
          Do you have a project?
          <span className={styles.titleRow}>
            Send us a message and let&apos;s connect{' '}
            <span aria-hidden={true}>👋</span>
          </span>
        </h2>
        <Button type="button">let&apos;s work</Button>
      </div>
    </section>
  );
};
