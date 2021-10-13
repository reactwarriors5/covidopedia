import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loggin: (state, action) => {
      state.user = action.payload
    },
    reducers: {
        loggin: (state,action) => {
            state.user = action.payload;
        },
        
    }
})

export const { loggin } = userSlice.actions

export const selectUser = state => state.user.user

export default userSlice.reducer
