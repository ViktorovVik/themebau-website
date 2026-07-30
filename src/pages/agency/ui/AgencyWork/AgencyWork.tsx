import styles from './AgencyWork.module.scss';
import cn from 'clsx';
import { WORKS_DATA } from '@/pages/agency/ui/AgencyWork/config/work-agency.data.ts';
import { AgencyWorkCard } from '@/pages/agency/ui/AgencyWork/ui';
import { Button } from '@/shared/ui';

const TITLE = 'work-agency-title';

export const AgencyWork = () => {
  return (
    <section className={styles.work} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <h2 className="visually-hidden" id={TITLE}>
          Our Works
        </h2>
        <ul className={styles.list}>
          {WORKS_DATA.map(({ id, tags, title, imgSrc, text, to }, index) => (
            <li key={id} className={styles.item}>
              <AgencyWorkCard
                tags={tags}
                imgSrc={imgSrc}
                title={title}
                text={text}
                to={to}
                reversed={index % 2 === 1}
              />
            </li>
          ))}
        </ul>
        <Button className={styles.workButton} variant="white" to="/portfolio">
          all work
        </Button>
      </div>
    </section>
  );
};
