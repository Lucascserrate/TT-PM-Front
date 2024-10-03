import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   projectList: [],
   logged: false

}

export const globalSlice = createSlice({
   name: 'global',
   initialState,
   reducers: {
      setProjectList: (state, action) => {
         state.projectList = action.payload
      },
      setLogged: (state, action) => {
         state.logged = action.payload
      }
   }
})

export const {
   setProjectList,
   setLogged

} = globalSlice.actions

export default globalSlice.reducer
