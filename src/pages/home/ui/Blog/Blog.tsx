import styles from './Blog.module.scss';
import cn from 'clsx';
import { BLOG_CARDS } from './config/blog.data';
import { BlogCard } from './ui';
import { Button } from '@/shared/ui';

const TITLE = 'blog-section-title';

export const Blog = () => {
  return (
    <section className={styles.blog} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <h2 id={TITLE} className={cn(styles.title, 'h3')}>
          What’s new?
        </h2>
        <ul className={styles.list}>
          {BLOG_CARDS.map(({ id, title, date, imgBg, to }) => (
            <li key={id} className={styles.item}>
              <BlogCard date={date} imgBg={imgBg} title={title} to={to} />
            </li>
          ))}
        </ul>
        <Button to="/agency">all posts</Button>
      </div>
    </section>
  );
};
