import type { Filter } from '@/shared/api/types';

interface CategoryData {
  id: string;
  label: string;
  filterValue: Filter;
}

export const CATEGORIES: CategoryData[] = [
  {
    id: '1',
    label: 'all projects',
    filterValue: 'all',
  },
  {
    id: '2',
    label: 'branding',
    filterValue: 'branding',
  },
  {
    id: '3',
    label: 'design',
    filterValue: 'design',
  },
  {
    id: '4',
    label: 'photography',
    filterValue: 'photography',
  },
  {
    id: '5',
    label: 'marketing',
    filterValue: 'marketing',
  },
];
