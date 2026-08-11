import styles from './Blog.module.scss';
import cn from 'clsx';
import { type BlogData } from './config/blog.data';
import { BlogCard } from './ui';
import { Button } from '@/shared/ui';
import { useEffect, useState } from 'react';

const TITLE = 'blog-section-title';

export const Blog = () => {
  const [posts = [], setPosts] = useState<BlogData[]>([]);
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stopFetch = new AbortController();

    const fetchPosts = async (url: string) => {
      try {
        const response = await fetch(url, { signal: stopFetch.signal });

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        setPosts(await response.json());
      } catch (error) {
        if (error instanceof Error) {
          // if (error.name === 'AbortError') {
          // }
          setError(error.message);
        } else {
          setError(`Mistaken HTTP: ${error}`);
        }
      } finally {
        setIsLoad(false);
      }
    };

    fetchPosts('http://localhost:3001/posts');

    return () => {
      stopFetch.abort();
    };
  }, []);

  let content;

  if (isLoad) {
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
        {posts.map(({ id, title, date, imgBg, to }) => (
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
        {content}
        <Button to="/agency">all posts</Button>
      </div>
    </section>
  );
};
