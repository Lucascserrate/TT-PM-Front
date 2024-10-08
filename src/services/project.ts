import { IProject } from '@/interface/interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const project = createApi({
   reducerPath: 'projectAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3001/'
   }),
   tagTypes: ['Project'],
   endpoints: (build) => ({
      getProject: build.query<IProject[], null>({
         query: () => 'project',
         providesTags: ['Project'],
      }),
      getProjectById: build.query<IProject, string>({
         query: (id) => `project/${id}`
      }),
      createProject: build.mutation<void, Partial<IProject>>({
         query: (newProject) => ({
            url: 'project/2',
            method: 'POST',
            body: newProject,
         }),
         invalidatesTags: ['Project'],
      }),
      updateProject: build.mutation<void, { id: string; description: string }>({
         query: ({ id, description }) => ({
            url: `project/${id}`,
            method: 'PATCH',
            body: { description },
         }),
      }),
      deleteProject: build.mutation<void, string>({
         query: (id) => ({
            url: `project/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Project'],
      })
   }),
})

export const { useGetProjectQuery, useGetProjectByIdQuery, useCreateProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation } = project
