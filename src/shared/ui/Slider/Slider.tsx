import { type ReactNode } from 'react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { PaginationOptions, SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Slider.module.scss';
import cn from 'clsx';

interface SliderProps {
  className?: string;
  slides: ReactNode[];
  navigation?: boolean;
  pagination?: boolean;
  slidesPerView?: number;
  breakpoints?: SwiperOptions['breakpoints'];
  scrollbar?: boolean;
  spaceBetween?: number;
}

export const Slider = ({
  slides,
  className,
  navigation = true,
  pagination = true,
  slidesPerView = 1,
  breakpoints,
  scrollbar = false,
  spaceBetween = 0,
}: SliderProps) => {
  const paginationConfig: PaginationOptions = {
    type: 'fraction',
    renderFraction: (currentClass, totalClass) =>
      `<span class="${currentClass}"></span> <span class="divider"> — </span> <span class="${totalClass}"></span>`,
    formatFractionCurrent: (number) => (number < 10 ? '0' + number : number),
    formatFractionTotal: (number) => (number < 10 ? '0' + number : number),
  };

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        wrapperTag="ul"
        className={cn(styles.swiper, className)}
        modules={[Navigation, Pagination, A11y, Scrollbar]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={{
          prevEl: '.swiper-arrow-prev',
          nextEl: '.swiper-arrow-next',
        }}
        loop={true}
        pagination={pagination ? paginationConfig : false}
        breakpoints={breakpoints}
        scrollbar={scrollbar}
      >
        {slides.map((slide, index) => (
          <SwiperSlide tag="li" key={index}>
            {slide}
          </SwiperSlide>
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
