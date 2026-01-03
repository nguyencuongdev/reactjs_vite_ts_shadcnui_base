import { createSlice } from '@reduxjs/toolkit'
import type { RootStateType } from '../store'

const initialState: {
  data: any | null
} = {
  data: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    clearInfoUser: () => initialState,
    storeInfoUser: (state, action) => {
      state.data = action.payload
      state = action.payload
    },
  },
  // extraReducers: builder => {},
})

export const userSelector = (state: RootStateType) => state.user

export const userActions = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
