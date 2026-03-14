import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './https'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery(),
  tagTypes: Object.values([]),
  endpoints: () => ({}),
})

export default baseApi