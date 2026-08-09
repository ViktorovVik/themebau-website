import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProjectsData } from "./types";

export const projectsApi  = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/"}),
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectsData[], void>({
      query: () => `projects/`
    }),
  }),
})

export const { useGetProjectsQuery } = projectsApi;