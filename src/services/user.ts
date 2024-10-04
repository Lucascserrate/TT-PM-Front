import { IUser } from '@/interface/interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const user = createApi({
   reducerPath: 'userAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3001/'
   }),
   tagTypes: ['User'],
   endpoints: (build) => ({
      getUser: build.query<IUser[], null>({
         query: () => 'user',
         providesTags: ['User'],
      }),
      getUserById: build.query<IUser, string>({
         query: (id) => `user/${id}`
      }),
      createUser: build.mutation<void, Partial<IUser>>({
         query: (newUser) => ({
            url: 'user',
            method: 'POST',
            body: newUser,
         }),
         invalidatesTags: ['User'],
      }),
      deleteUser: build.mutation<void, string>({
         query: (id) => ({
            url: `user/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['User'],
      })
   }),
})

export const { useGetUserQuery, useGetUserByIdQuery, useCreateUserMutation, useDeleteUserMutation } = user
