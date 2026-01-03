import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'

const isDevToolsEnabled =
  import.meta.env.NODE_ENV !== 'production' ||
  (import.meta.env.NEXT_PUBLIC_ENV !== 'PRODUCTION' && import.meta.env.NEXT_PUBLIC_ENV !== 'LIVE') // auto tắt khi build production
const store = configureStore({
  reducer: rootReducer,
  devTools: isDevToolsEnabled, // Chỉ bật ở dev
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export default store
