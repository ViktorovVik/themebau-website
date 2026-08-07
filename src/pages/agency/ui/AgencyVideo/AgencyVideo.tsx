import styles from './AgencyVideo.module.scss';
import cn from 'clsx';
import { Button } from '@/shared/ui';
import imgBg from '@/shared/assets/img/video/bg.webp';


const TITLE = 'agency-video-title';

export const AgencyVideo = () => {

  return (
    <section aria-labelledby={TITLE} className={styles.video}>
      <h2 id={TITLE} className="visually-hidden">
        Video about our Agency
      </h2>
      <div className={cn(styles.inner, 'container')}>
        <img
          className={styles.banner}
          src={imgBg}
          alt=""
          width={1170}
          loading="lazy"
        />
          <Button aria-label='Play video on YouTube (opens in new tab)' target='_blank' rel='noreferrer' href='https://www.youtube.com/watch?v=HQkkmYIu95I&t=38s'  className={styles.button} variant="circle">
            play
          </Button>
      </div>
    </section>
  );
};
