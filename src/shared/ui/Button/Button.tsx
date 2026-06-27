import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonTypes = 'primary' | 'circle' | 'transparent' | 'white';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonTypes;
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
};
