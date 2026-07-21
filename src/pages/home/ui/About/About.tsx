import { Link } from "react-router";
import style from './About.module.scss';
import cn from "clsx";
import { Subtitle } from "@/shared/ui";
import deco from '@/shared/assets/deco/1.svg';


const TITLE = "about-title"

export const About = () => {
  return (
    <section className={style.about} aria-labelledby={TITLE}>
      <div className={cn(style.inner, 'container')}>
        <img
          className={style.deco}
          src={deco}
          alt=""
          width={641}
          height={641}
          aria-hidden="true"
        />
        <div className={style.titlesAbout}>
          <Subtitle className={style.subtitleAbout}>who we are</Subtitle>
          <h2 id={TITLE} className={cn(style.title, 'h5')}>An award-winning design & dev team
            that is proud of our work 👋</h2>
        </div>
        <div className={style.text}>
          <p className={style.leftCol}>Over 10 years of combined experience,
            and know a thing or two about designing
            websites and mobile apps.
          </p>
          <p className={style.rightCol}>Were divided, a moved night light darkness winged may
            also make man for. Winged the for Earth creeping appear
            evening, gathered Forth so he. Life that dry of created
            greater can't also gathered female green.
          </p>
          <Link className={style.button} to="/agency">about us <span className={style.dot}></span></Link>
        </div>
      </div>
    </section>
  )
}