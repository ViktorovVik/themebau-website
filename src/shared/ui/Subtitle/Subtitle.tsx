import type { ReactNode } from 'react';
import cn from 'clsx';
import style from './Subtitle.module.scss';

interface SubtitleProps {
  className?: string;
  children: ReactNode;
}

export const Subtitle = ({ className, children }: SubtitleProps) => {
  return <span className={cn(style.subtitle, className)}>{children}</span>;
};
