import { Link } from 'react-router';
import slide1 from '@/shared/assets/img/slider/3.webp';
import slide2 from '@/shared/assets/img/slider/2.webp';
import slide3 from '@/shared/assets/img/slider/1.webp';
import { Slider } from '@/shared/ui';
import style from './Hero.module.scss';
import cn from 'clsx';

export const Hero = () => {
  const slides = [
    <img
      key="1"
      src={slide1}
      alt=""
      width={1170}
      height={580}
      loading="eager"
    />,
    <img
      key="2"
      src={slide2}
      alt=""
      width={1170}
      height={580}
      loading="eager"
    />,
    <img
      key="3"
      src={slide3}
      alt=""
      width={1170}
      height={580}
      loading="eager"
    />,
  ];

  return (
    <section className={style.hero}>
      <div className={cn(style.inner, 'container')}>
        <Slider slides={slides} navigation className={style.heroSlider}/>
        <div className={style.content}>
          <span className={style.line}></span>
          <h1 className={cn(style.title, 'h1')}>Colibri Creative Project</h1>
        </div>
        <Link to="/portfolio" className={style.view}>
          view
        </Link>
      </div>
    </section>
  );
};
