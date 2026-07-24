import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import styles from './WorkProcess.module.scss';
import cn from 'clsx';
import { WORK_PROCESS } from './config/workprocess.data';
import { Button } from '@/shared/ui';
import deco from '@/shared/assets/deco/2.svg';

const TITLE = 'work-process-title';

export const WorkProcess = () => {
  const [activeId, setActiveId] = useState(WORK_PROCESS[0].id);

  const isFirstRender = useRef(true);

  const activeStep = WORK_PROCESS.find((step) => step.id === activeId);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const activeID = document.getElementById(`tab-${activeId}`);
    activeID?.focus();
  }, [activeId]);

  const handleKeyDown = (e: KeyboardEvent) => {
    const currentIndex = WORK_PROCESS.findIndex((step) => step.id === activeId);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const lastIndex = WORK_PROCESS.length - 1;

      let nextIndex = currentIndex + 1;

      if (nextIndex > lastIndex) {
        nextIndex = 0;
      }
      setActiveId(WORK_PROCESS[nextIndex].id);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();

      let nextIndex = currentIndex - 1;

      if (nextIndex < 0) {
        nextIndex = WORK_PROCESS.length - 1;
      }

      setActiveId(WORK_PROCESS[nextIndex].id);
    }
  };

  return (
    <section className={styles.work} aria-labelledby={TITLE}>
      <div className={cn(styles.inner, 'container')}>
        <img
          className={styles.deco}
          src={deco}
          alt=""
          width={641}
          height={641}
          aria-hidden="true"
        />
        <h2 id={TITLE} className={cn(styles.title, 'h3')}>
          Work process
        </h2>
        <div className={styles.content}>
          <ol onKeyDown={handleKeyDown} className={styles.list} role="tablist">
            {WORK_PROCESS.map(({ id, title }, index) => {
              const isActive = id === activeId;

              return (
                <li role="presentation" className={styles.item} key={id}>
                  <button
                    role="tab"
                    id={`tab-${id}`}
                    aria-controls="work-process-panel"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(id)}
                    className={cn(
                      styles.itemButton,
                      isActive && styles.active,
                      'h6',
                    )}
                  >
                    {title}
                    {isActive && (
                      <span className={styles.nums}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
          <div
            aria-labelledby={`tab-${activeId}`}
            role="tabpanel"
            id="work-process-panel"
            className={styles.info}
          >
            <p key={activeId}>{activeStep?.text}</p>
            <Button to="/agency" className={styles.button} variant="white">
              read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
