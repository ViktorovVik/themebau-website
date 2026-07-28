import { Link } from 'react-router';
import styles from './Projects.module.scss';
import cn from 'clsx';
import { useEffect, useState } from 'react';
import { PROJECTS, CATEGORIES, type Filter } from './config/projects.data';
import { Button } from '@/shared/ui';

const TITLE = 'projects-section-title';

export const Projects = () => {
  const calcColumns = () => {
    const size = window.innerWidth;

    if (size < 767) {
      return 1;
    }

    if (size < 1023) {
      return 2;
    }

    return 3;
  };

  const [activeCategory, setActiveCategory] = useState<Filter>('all');

  const [columnsCount, setColumnsCount] = useState(calcColumns());

  const [amountProjects, setAmountProjects] = useState(calcColumns() * 3);

  useEffect(() => {
    const handleResize = () => {
      setColumnsCount(calcColumns());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleProjects = PROJECTS.filter((project) => {
    return activeCategory === 'all' || project.category === activeCategory;
  });

  const columnsArray: (typeof visibleProjects)[] = Array.from(
    { length: columnsCount },
    () => [],
  );
  const limitedProjects = visibleProjects.slice(0, amountProjects);

  limitedProjects.forEach((project, index) => {
    columnsArray[index % columnsCount].push(project);
  });

  const showMore = () => {
    setAmountProjects((prev) => prev + 3);
  };

  return (
    <section aria-labelledby={TITLE} className={styles.projects}>
      <h2 id={TITLE} className="visually-hidden">
        Our Projects
      </h2>
      <div className={cn(styles.inner, 'container')}>
        <ul className={styles.categoriesList}>
          {CATEGORIES.map(({ id, label, filterValue }) => (
            <li key={id} className={styles.categoryItem}>
              <button
                className={cn(
                  styles.categoryButton,
                  filterValue === activeCategory && styles.active,
                )}
                onClick={() => {
                  setActiveCategory(filterValue);
                  setAmountProjects(calcColumns() * 3);
                }}
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.projectGrid}>
          {columnsArray.map((column, columnIndex) => (
            <ul key={columnIndex} className={styles.projectColumn}>
              {column.map(({ id, imgSrc, to, title }) => (
                <li
                  key={`${id} ${activeCategory}`}
                  className={cn(styles.projectItem)}
                >
                  <figure className={styles.projectCard}>
                    <img
                      className={styles.projectImg}
                      src={imgSrc}
                      alt=""
                      loading="lazy"
                    />
                    <figcaption className={styles.projectTitle}>
                      <Link to={to} className={styles.projectLink}>
                        {title}
                      </Link>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ))}
        </div>
        {limitedProjects.length < visibleProjects.length && (
          <Button
            onClick={showMore}
            className={styles.button}
            type="button"
            variant="circle"
          >
            more
          </Button>
        )}
      </div>
    </section>
  );
};
