import styles from './Blog.module.scss';
import cn from 'clsx';
import { BlogCard } from './ui';
import { Button } from '@/shared/ui';
import { useGetPostsQuery } from "@/shared/api/createApi";


const TITLE = 'blog-section-title';

export const Blog = () => {
 const { data = [], error, isLoading } = useGetPostsQuery();

  let content;

  if (isLoading) {
    content = (
      <span className={styles.statusText}>
        <span>Loading</span>
        <span className={styles.dots} aria-hidden>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
        </span>
      </span>
    );
  } else if (error) {
    content = (
      <span className={styles.statusText}>
        Couldn&apos;t fetch the posts. Please, try again later!
      </span>
    );
  } else {
    content = (
      <ul className={styles.list}>
        {data.map(({ id, title, date, imgBg, to }) => (
          <li key={id} className={styles.item}>
            <BlogCard date={date} imgBg={imgBg} title={title} to={to} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className={styles.blog} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <h2 id={TITLE} className={cn(styles.title, 'h3')}>
          What’s new?
        </h2>
        <div aria-live="polite" className={styles.contentWrapper}>{content}</div>
        <Button to="/agency">all posts</Button>
      </div>
    </section>
  );
};
