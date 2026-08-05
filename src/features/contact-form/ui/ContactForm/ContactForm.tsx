import {
  useState,
  useId,
  type ChangeEvent,
  type FormEvent,
  useEffect,
} from 'react';
import styles from './ContactForm.module.scss';
import { Button } from '@/shared/ui';

type FormState = 'idle' | 'sending' | 'success' | 'error';

interface ContactFormProps {
  isOpen: boolean;
}

export const ContactForm = ({ isOpen }: ContactFormProps) => {
  const uniqId = useId();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormState>('idle');

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }
  }, [isOpen]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      const random = Math.random();

      if (random > 0.3) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  return (
    <>
      <p aria-live="polite" className="visually-hidden">
        {status === 'success' && 'Message sent!'}
        {status === 'error' && 'Something went wrong. Please try again!'}
      </p>
      {status === 'success' ? (
        <p className={styles.success}>Message sent</p>
      ) : (
        <form className={styles.formContact} onSubmit={handleSubmit}>
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
          </div>
          {status === 'error' && (
            <p className={styles.error}>
              Something went wrong. Please try again.
            </p>
          )}
          <Button disabled={status === 'sending'} type="submit">
            {status === 'sending' ? 'sending...' : 'contact us'}
          </Button>
        </form>
      )}
    </>
  );
};
