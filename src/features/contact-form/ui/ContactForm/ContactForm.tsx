import {
  useState,
  useId,
  type ChangeEvent,
  type SubmitEvent,
  useEffect,
  type CSSProperties,
} from 'react';
import { X } from 'lucide-react';
import styles from './ContactForm.module.scss';
import { Button } from '@/shared/ui';
import type { ContactFormData } from '@/shared/api/types';
import cn from 'clsx';
import { usePostMessageMutation } from '@/shared/api/createApi';

interface ContactFormProps {
  isOpen: boolean;
}

export const ContactForm = ({ isOpen }: ContactFormProps) => {
  const uniqId = useId();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [triggerFn, { isLoading, isError, isSuccess, reset }] =
    usePostMessageMutation();

  useEffect(() => {
    if (isOpen) {
      reset();
      setFormData({ name: '', email: '', message: '' });
    }
  }, [isOpen]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = (name: keyof ContactFormData) => {
    setFormData((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    triggerFn(formData);
  };

  const arrayStr = 'Message sent!'.split('');
  const letters = arrayStr.map((letter, index) => {
    return (
      <span style={{ '--index': index } as CSSProperties} key={index}>
        {letter}
      </span>
    );
  });

  return (
    <>
      <p aria-live="polite" className="visually-hidden">
        {isSuccess && 'Message sent!'}
        {isError && 'Something went wrong. Please try again!'}
      </p>
      <p className={cn(styles.success, isSuccess && styles.show)}>{letters}</p>
      <form
        className={cn(styles.formContact, isSuccess && styles.hidden)}
        onSubmit={handleSubmit}
      >
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor={`${uniqId}--name`}>
            Your Name
          </label>
          <input
            className={styles.input}
            id={`${uniqId}--name`}
            name="name"
            placeholder="John Dow"
            type="text"
            required
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
          {formData.name && (
            <button
              onClick={() => handleClear('name')}
              aria-label="Clear Field"
              type="button"
              className={styles.crossButton}
            >
              <X aria-hidden />
            </button>
          )}{' '}
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor={`${uniqId}--email`}>
            Your Email
          </label>
          <input
            className={styles.input}
            id={`${uniqId}--email`}
            name="email"
            placeholder="example@mail.com"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {formData.email && (
            <button
              onClick={() => handleClear('email')}
              aria-label="Clear Field"
              type="button"
              className={styles.crossButton}
            >
              <X aria-hidden />
            </button>
          )}{' '}
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor={`${uniqId}--message`}>
            Your Suggestions
          </label>
          <textarea
            className={styles.message}
            id={`${uniqId}--message`}
            name="message"
            maxLength={250}
            rows={6}
            value={formData.message}
            onChange={handleChange}
          />
          {formData.message && (
            <button
              onClick={() => handleClear('message')}
              aria-label="Clear Field"
              type="button"
              className={styles.crossButton}
            >
              <X aria-hidden />
            </button>
          )}
        </div>
        {isError && (
          <p className={styles.error}>
            Something went wrong. Please try again.
          </p>
        )}
        <Button disabled={isLoading} type="submit">
          {isLoading ? 'sending...' : 'contact us'}
        </Button>
      </form>
    </>
  );
};
