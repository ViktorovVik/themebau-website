import type {
  FeaturedCard
} from "../../FeaturedWork/config/featured.data";
import styles from './FeaturedWorkCard.module.scss';
import cn from "clsx";
import { Subtitle } from "@/shared/ui";
import { Link } from "react-router";

type Props = Omit<FeaturedCard ,'id'> & { className?: string };

export const FeaturedWorkCard = ({src, category, title, to, hasView, width, height, className, size}: Props) => {
  return (
    <article className={cn(styles.card,  styles[size], className)}>
      <img
        className={styles.cardImg}
        src={src}
        alt=""
        width={width}
        height={height}
        loading="lazy"
      />
      {hasView && (
        <span  className={cn(styles.view, 'hidden-mobile')}>view</span>
      )}
      <div className={styles.cardText}>
        <h3 className={cn(styles.cardTitle, 'h6')}><Link className={styles.cardLink} to={to}>{title}</Link></h3>
        <Subtitle className={styles.cardCategory}>{category}</Subtitle>
      </div>
    </article>
  )
}