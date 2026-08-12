import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProjectsData, ContactFormData, BlogData } from './types';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectsData[], void>({
      query: () => `projects/`,
    }),
    postMessage: builder.mutation<{ id: string }, ContactFormData>({
      query: (formData) => ({
        url: 'messages/',
        method: 'POST',
        body: formData,
      }),
    }),
    getPosts: builder.query<BlogData[], void>({
      query: () => `posts/`,
    })
  }),
});

export const { useGetProjectsQuery, usePostMessageMutation, useGetPostsQuery } = projectsApi;
