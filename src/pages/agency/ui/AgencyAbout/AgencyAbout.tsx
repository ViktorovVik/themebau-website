import cn from 'clsx';
import styles from './AgencyAbout.module.scss';
import { Button, Subtitle } from '@/shared/ui';

const TITLE = 'agency-about-title';

export const AgencyAbout = () => {
  return (
    <section aria-labelledby={TITLE} className={styles.about}>
      <div className={cn(styles.inner, 'container')}>
        <div className={styles.colLeft}>
          <Subtitle>who we are</Subtitle>
          <h2 id={TITLE} className={cn(styles.title, 'h4')}>
            We&apos;ve worked with 50+ brands
          </h2>
          <Button className={styles.button} to="/">
            about us
          </Button>
        </div>
        <div className={styles.colRight}>
          <div className={styles.topText}>
            <p>
              Over 10 years of combined experience, and know a thing or two
              about.
            </p>
          </div>
          <div className={styles.bottomText}>
            <p>
              Won&apos;t seasons, appear days them stars replenish divided. All
              second forth. Him place was seas man and gathering creepeth called
              fly. Them sea place lights, midst bearing fourth above.
            </p>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <strong>106</strong>
              <span>projects</span>
            </li>
            <li className={styles.item}>
              <strong>12</strong>
              <span>years</span>
            </li>
            <li className={styles.item}>
              <strong>9</strong>
              <span>awards</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
