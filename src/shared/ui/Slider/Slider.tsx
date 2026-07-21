import { type ReactNode } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Slider.module.scss';
import cn from 'clsx';

interface SliderProps {
  className?: string;
  slides: ReactNode[];
  navigation?: boolean;
}

export const Slider = ({
  slides,
  className,
  navigation = true,
}: SliderProps) => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        wrapperTag="ul"
        className={cn(styles.swiper, className)}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-arrow-prev',
          nextEl: '.swiper-arrow-next',
        }}
        loop={true}
        pagination={{
          type: 'fraction',
          renderFraction: (currentClass, totalClass) =>
            `<span class="${currentClass}"></span> <span class="divider"> — </span> <span class="${totalClass}"></span>`,
          formatFractionCurrent: (number) =>
            number < 10 ? '0' + number : number,
          formatFractionTotal: (number) =>
            number < 10 ? '0' + number : number,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide tag="li" key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      {navigation && (
        <div className="hidden-tablet">
          <button
            className={cn(styles.prev, 'swiper-arrow-prev')}
            type="button"
          >
            <svg className={styles.svgEl}>
              <use href="/sprites/sprites.svg#arrow" />
            </svg>
          </button>
          <button
            className={cn(styles.next, 'swiper-arrow-next')}
            type="button"
          >
            <svg className={styles.svgEl}>
              <use href="/sprites/sprites.svg#arrow" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
