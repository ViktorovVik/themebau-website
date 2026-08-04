import { useId } from 'react';
import styles from './ContactForm.module.scss';
import { Button } from '@/shared/ui';

export const ContactForm = () => {
  const uniqId = useId();

  return (
    <form className={styles.formContact}>
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
        />
      </div>
      <Button type="submit">contact us</Button>
    </form>
  );
};
