import styles from './Modal.module.scss';
import {type ReactNode, useEffect, useRef, type MouseEvent} from "react";

interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: ReactNode;
}

export const Modal = ({ closeModal, isOpen, children }: ModalProps) => {

  const refModal = useRef<HTMLDialogElement>(null);

  const handleBackdropClick= (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

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
    }
  }, [isOpen]);

  return (
    <dialog onClick={handleBackdropClick} ref={refModal} className={styles.modal} onClose={closeModal}>
      <div className={styles.modalWrapper}>
        {children}
      </div>
    </dialog>
  )
}