type Category = 'marketing' | 'branding' | 'design' | 'photography';
export type Filter = Category | 'all';

export interface ProjectsData {
  id: string;
  imgSrc: string;
  category: Category;
  to: string;
  title: string;
}
