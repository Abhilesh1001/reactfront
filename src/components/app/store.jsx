import { configureStore } from '@reduxjs/toolkit'
import userSlicer from '../feature/user/userSlicer'
import { setupListeners } from '@reduxjs/toolkit/query'
import {rootApi} from '../services/rootApi'

export const store = configureStore({
  reducer: {
    user : userSlicer ,
    [rootApi.reducerPath] : rootApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(rootApi.middleware),
 
})
setupListeners(store.dispatch)

