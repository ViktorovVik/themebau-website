import type {
  ReactNode,
  ComponentPropsWithoutRef
} from 'react';
import { Link, type LinkProps } from 'react-router'
import styles from './Button.module.scss';
import cn from 'clsx';

type ButtonTypes = 'primary' | 'circle' | 'transparent' | 'white';

interface BaseProps {
  className?: string;
  variant?: ButtonTypes;
  children?: ReactNode;
}

type AsButton = BaseProps & ComponentPropsWithoutRef<'button'> & {
  to?: never;
  href?: never;
}

type AsAnchor = BaseProps & ComponentPropsWithoutRef<'a'> & {
  href: string;
  to?: never;
  type?: never;
}

type AsLink = BaseProps & LinkProps & {
  to: string;
  type?: never;
  href?: never;
}

type ButtonProps = AsButton | AsAnchor | AsLink;

export const Button = ({ className, variant = 'primary', children, ...rest}: ButtonProps) => {

  const classes = cn(styles.button, styles[variant], className);

  if ('to' in rest) {
    return <Link className={classes} {...rest as LinkProps}>{children}</Link>;
  }

  if ('href' in rest) {
    return <a className={classes} {...rest as ComponentPropsWithoutRef<'a'>}>{children}</a>
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
