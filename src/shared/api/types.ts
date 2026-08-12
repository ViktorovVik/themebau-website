type Category = 'marketing' | 'branding' | 'design' | 'photography';
export type Filter = Category | 'all';

export interface ProjectsData {
  id: string;
  imgSrc: string;
  category: Category;
  to: string;
  title: string;
}

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export interface BlogData {
  id: string;
  date: string;
  imgBg: string;
  title: string;
  to: string;
}
