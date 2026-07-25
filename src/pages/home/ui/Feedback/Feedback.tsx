import styles from './Feedback.module.scss';
import cn from 'clsx';
import { Slider } from '@/shared/ui';
import { FEEDBACKS } from '@/pages/home/ui/Feedback/config/feedback.data.ts';
import deco from '@/shared/assets/deco/2.svg';

const TITLE = 'feedback-section-title';

export const Feedback = () => {
  return (
    <section className={styles.feedback} aria-labelledby={TITLE}>
      <h2 id={TITLE} className="visually-hidden">
        Feedback from Our Customers
      </h2>
      <div className={cn(styles.inner, 'container')}>
        <img
          className={styles.deco}
          src={deco}
          alt=""
          width={641}
          height={641}
          aria-hidden="true"
        />
        <svg aria-hidden="true" className={styles.quotes}>
          <use href="/sprites/sprites.svg#quotes" />
        </svg>
        <Slider
          pagination={true}
          slidesPerView={1}
          spaceBetween={30}
          navigation={false}
          slides={FEEDBACKS.map(({ id, text, company, name }) => (
            <figure key={id} className={styles.figure}>
              <blockquote className={styles.text}>{text}</blockquote>
              <figcaption className={styles.info}>
                {name}, {company}
              </figcaption>
            </figure>
          ))}
          className={styles.list}
        />
      </div>
    </section>
  );
};
