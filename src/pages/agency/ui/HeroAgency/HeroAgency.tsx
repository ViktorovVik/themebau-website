import cn from 'clsx';
import styles from './HeroAgency.module.scss';
import { Button, Modal } from '@/shared/ui';
import { ContactForm } from '@/features/contact-form/ui/ContactForm';
import { useModal } from '@/shared/lib/useModal';

const TITLE = 'agency-hero-section-title';

export const HeroAgency = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <section className={styles.hero} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <h1 id={TITLE} className={cn(styles.title, 'h2')}>
          Creative branding studio.
        </h1>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Over 10 years of combined experience, and know a thing or two
              about designing websites and mobile apps.
            </p>
          </div>
          <Button
            onClick={openModal}
            className={styles.button}
            type="button"
            variant="white"
          >
            let&apos;s work
          </Button>
          <Modal
            closeModal={closeModal}
            isOpen={isOpen}
            title="Let`s work together"
          >
            <ContactForm isOpen={isOpen} />
          </Modal>
        </div>
      </div>
    </section>
  );
};
