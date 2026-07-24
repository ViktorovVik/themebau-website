import styles from './Create.module.scss';
import cn from "clsx";
import { Button } from "@/shared/ui";
import img1 from '@/shared/assets/img/create/3.webp';
import img2 from '@/shared/assets/img/create/2.webp';
import img3 from '@/shared/assets/img/create/1.webp';

const TITLE = 'create-section-title';


export const Create = () => {
  return (
    <section className={styles.create} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <div className={styles.pictures}>
          <img
            className={styles.bigPic}
            src={img1}
            alt=""
            width={470}
            height={290}
            loading="lazy"
          />
          <img
            className={styles.smallPic}
            src={img3}
            alt=""
            width={140}
            height={140}
            loading="lazy"
          />
          <img
            className={styles.middlePic}
            src={img2}
            alt=""
            width={270}
            height={250}
            loading="lazy"
          />
        </div>
        <div className={styles.info}>
          <h2 id={TITLE} className={cn(styles.title, 'h5')}>We create everything
            digital, printable and
            analytical  🔥
          </h2>
          <div className={styles.bottom}>
            <div className={styles.text}>
              <p>Won't seasons, appear days them stars replenish
                divided. All second forth. Him place was seas man and
                gathering creepeth called fly. Them sea place lights,
                midst bearing fourth above.
              </p>
            </div>
            <Button to='/agency'>read more</Button>
          </div>
        </div>
      </div>
    </section>
  )
}