import { useState } from 'react';
import styles from './PortfolioCTA.module.scss';
import cn from 'clsx';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui';
import { ContactForm } from '@/features/contact-form/ui/ContactForm';

const TITLE = 'cta-title';

export const PortfolioCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className={styles.cta} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <h2 id={TITLE} className={cn(styles.title, 'h5')}>
          Do you have a project?
          <span className={styles.titleRow}>
            Send us a message and let&apos;s connect{' '}
            <span aria-hidden={true}>👋</span>
          </span>
        </h2>
        <Button onClick={openModal} type="button">
          let&apos;s work
        </Button>
      </div>
      <Modal
        closeModal={closeModal}
        isOpen={isOpen}
        title={'Let&apos;s work together'}
      >
        <ContactForm />
      </Modal>
    </section>
  );
};
