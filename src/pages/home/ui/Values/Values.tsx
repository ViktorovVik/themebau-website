import cn from 'clsx';
import styles from './Values.module.scss';
import { VALUES_CARD } from '@/pages/home/ui/Values/config/values.data.ts';
import { ValueCard } from '@/pages/home/ui/Values/ui/ValueCard.tsx';
import { Slider } from '@/shared/ui';

const TITLE = 'values-section-title';

const SLIDER_BREAKPOINTS = {
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

export const Values = () => {
  return (
    <section className={styles.values} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <h2 id={TITLE} className={cn(styles.title, 'h2')}>
          VALUES
        </h2>
        <Slider
          breakpoints={SLIDER_BREAKPOINTS}
          scrollbar
          pagination={false}
          slidesPerView={1}
          spaceBetween={30}
          slides={VALUES_CARD.map(({ id, iconId, title, text, to }) => (
            <ValueCard
              className={styles.card}
              key={id}
              iconId={iconId}
              title={title}
              text={text}
              to={to}
            />
          ))}
          className={styles.list}
        />
      </div>
    </section>
  );
};
