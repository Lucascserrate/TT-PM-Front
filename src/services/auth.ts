import { IUser } from '@/interface/interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const auth = createApi({
   reducerPath: 'authAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3001/'
   }),
   tagTypes: ['Auth'],
   endpoints: (build) => ({
      register: build.mutation<void, Partial<IUser>>({
         query: (body) => ({
            url: 'auth/register',
            method: 'POST',
            body
         }),
         invalidatesTags: ['Auth']
      }),
      login: build.mutation({
         query: (body) => ({
            url: 'auth/login',
            method: 'POST',
            body
         })
      })
   }),
})

export const { useRegisterMutation, useLoginMutation } = auth
