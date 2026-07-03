import type { ReactNode } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import styles from './Slider.module.scss';

interface SliderProps {
  className?: string;
  slides: ReactNode[];
}

export const Slider = ({ slides, className }: SliderProps) => {
  return (
    <Swiper
      className={className}
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: false }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
