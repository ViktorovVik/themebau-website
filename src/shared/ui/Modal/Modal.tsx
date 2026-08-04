import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import styles from './Modal.module.scss';
import {
  type ReactNode,
  useEffect,
  useRef,
  type MouseEvent,
  useId,
} from 'react';

interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: ReactNode;
  title: string;
}

export const Modal = ({ closeModal, isOpen, children, title }: ModalProps) => {
  const titleID = useId();

  const refModal = useRef<HTMLDialogElement>(null);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const dialog = refModal.current;

    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('is-lock');
    }

    return () => {
      document.documentElement.classList.remove('is-lock');
    };
  }, [isOpen]);

  return createPortal(
    <dialog
      onClick={handleBackdropClick}
      ref={refModal}
      className={styles.modal}
      onClose={closeModal}
      aria-labelledby={titleID}
    >
      <h2 className="visually-hidden" id={titleID}>
        {title}
      </h2>
      <button
        className={styles.closeButton}
        type="button"
        onClick={closeModal}
        aria-label="Close Modal"
      >
        <X />
      </button>
      <div className={styles.modalWrapper}>{children}</div>
    </dialog>,
    document.body,
  );
};
