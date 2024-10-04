import { configureStore } from '@reduxjs/toolkit'
import global from './slices/global'
import { setupListeners } from '@reduxjs/toolkit/query'
import { project } from '@/services/project'
import { task } from '@/services/task'

export const store = configureStore({
   reducer: {
      global,
      [project.reducerPath]: project.reducer,
      [task.reducerPath]: task.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([project.middleware, task.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
