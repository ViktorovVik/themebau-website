# CONTRIBUTING

## Модель ветвления (GitHub Flow)

Главная ветка `main`, она всегда готова к деплою, в ней лежит только рабочий код. От `main` отходит рабочая ветка и возвращается в `main`. Проверка кода происходит на этапе `PR`, ничего не вливается в `main` минуя `PR`.


## Имена веток

<type>/<kebab-case-описание> где <type> — значения `feat`, `fix`, `docs`, `chore`, `refactor`. <kebab-case-описание> — краткое описание задачи в нижнем регистре через дефис.

```
docs/contributing-guidelines
```

## Коммиты (Conventional Commits)

- `docs` — документы
- `chore` — рутина
- `refactor` — рефактор кода
- `fix` — фикс багов
- `feat` — добавление новой фичи

```
chore: add initial project vite setup
```

```
docs: add contributing guidelines
```

## Стратегия мёрджа (Squash)

Squash — все коммиты ветки схлопываются в один при мёрдже. `PR` может содержать пять твоих коммитов, а в `main` после squash прилетит один. Это нужно для `linear history`, чтобы история `main` оставалась прямой.


