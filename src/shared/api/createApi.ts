import { createApi } from '@reduxjs/toolkit/query/react';
import type { ProjectsData, ContactFormData, BlogData } from './types';
import { supabase } from './supabase';

type TableDataSelect = {
  table: string;
  action: 'select';
  fields: string;
};

type TableDataInsert = {
  table: string;
  action: 'insert';
  data: ContactFormData;
};

type TableDataTypes = TableDataSelect | TableDataInsert;

const customBaseQuery = async (base: TableDataTypes) => {
  const { table, action } = base;

  let insertOrSelectData;

  if (action === 'insert') {
    insertOrSelectData = await supabase.from(table).insert(base.data);
  } else {
    insertOrSelectData = await supabase.from(table).select(base.fields);
  }

  const { data, error } = insertOrSelectData;

  if (error) {
    return { error };
  } else {
    return { data };
  }
};

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectsData[], void>({
      query: () => ({
        table: 'projects',
        action: 'select',
        fields: 'id, imgSrc:img_src, category, to:link, title',
      }),
    }),
    postMessage: builder.mutation<{ id: string }, ContactFormData>({
      query: (formData) => ({
        table: 'messages',
        action: 'insert',
        data: formData,
      }),
    }),
    getPosts: builder.query<BlogData[], void>({
      query: () => ({
        table: 'posts',
        action: 'select',
        fields: 'id, date, imgBg:img_bg, to:link, title',
      }),
    }),
  }),
});

export const { useGetProjectsQuery, usePostMessageMutation, useGetPostsQuery } =
  projectsApi;
