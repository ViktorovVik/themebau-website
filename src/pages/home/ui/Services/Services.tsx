import { SERVICES } from '@/pages/home/ui/Services/config/services.data.ts';
import { ServiceCard } from '@/pages/home/ui/Services/ui/ServicesCard';
import styles from './Services.module.scss';
import cn from 'clsx';

const TITLE = 'title-services';

export const Services = () => {
  return (
    <section className={styles.services} aria-labelledby={TITLE}>
      <h2 id={TITLE} className="visually-hidden">
        Our Services
      </h2>
      <div className={cn(styles.inner, 'container')}>
        <ul className={styles.list}>
          {SERVICES.map(({ id, src, iconId, title, to }) => (
            <li key={id} className={styles.item}>
              <ServiceCard to={to} src={src} iconId={iconId} title={title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
