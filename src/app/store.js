import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { STATE_REDUCER_KEY } from 'common/constants'
import { commonServicesReducer } from 'pages/common-services'
import baseApi from 'services/baseApi'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [STATE_REDUCER_KEY]: commonServicesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
})

setupListeners(store.dispatch)