import { ITask } from '@/interface/interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const task = createApi({
   reducerPath: 'taskAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3001/'
   }),
   tagTypes: ['Task'],
   endpoints: (build) => ({
      getTaskById: build.query<ITask[], string>({
         query: (id) => `task/?project_id=${id}`,
         providesTags: ['Task'],
      }),
      createTask: build.mutation<void, Partial<ITask>>({
         query: (newTask) => ({
            url: 'task',
            method: 'POST',
            body: newTask,
         }),
         invalidatesTags: ['Task'],
      }),
      updateTask: build.mutation<void, { id: string; description: string }>({
         query: ({ id, description }) => ({
            url: `task/${id}`,
            method: 'PATCH',
            body: { description },
         }),
      }),
      deleteTask: build.mutation<void, string>({
         query: (id) => ({
            url: `task/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Task'],
      })
   }),
})

export const { useGetTaskByIdQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = task
