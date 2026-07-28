import { Link } from "react-router";
import styles from './Projects.module.scss';
import cn from "clsx";
import { useState } from "react";
import {
  PROJECTS,
  CATEGORIES,
  type Filter
} from "./config/projects.data";
import { Button } from "@/shared/ui";

const TITLE = 'projects-section-title';

export const Projects = () => {

  const [activeCategory, setActiveCategory] = useState<Filter>('all');

  const visibleProjects = PROJECTS.filter((project) => {

   return activeCategory === 'all' || project.category === activeCategory;

  })

  const columns: typeof visibleProjects[] = [[], [], []];

  visibleProjects.forEach((project, index) => {
    columns[index % 3].push(project);
  });

  return (
    <section aria-labelledby={TITLE} className={styles.projects}>
      <h2 id={TITLE} className='visually-hidden'>Our Projects</h2>
      <div className={cn(styles.inner, 'container')}>
          <ul className={styles.categoriesList}>
            {CATEGORIES.map(({id, label, filterValue}) => (
              <li key={id} className={styles.categoryItem}>
                <button
                  className={cn(styles.categoryButton ,filterValue === activeCategory && styles.active)}
                  onClick={() => setActiveCategory(filterValue)}
                  type="button"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        <div className={styles.projectGrid}>
          {columns.map((column, columnIndex) => (
            <ul key={columnIndex} className={styles.projectColumn}>
              {column.map(({ id, imgSrc, to, title }) => (
                <li key={id} className={cn(styles.projectItem)}>
                  <figure className={styles.projectCard}>
                    <img
                      className={styles.projectImg}
                      src={imgSrc}
                      alt=""
                      loading="lazy"
                    />
                    <figcaption className={styles.projectTitle}>
                      <Link to={to} className={styles.projectLink}>{title}</Link>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <Button className={styles.button} type='button' variant='circle'>more</Button>
      </div>
    </section>
  )
}
