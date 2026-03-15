import baseApi from "services/baseApi"


export const landingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSampleById: build.query({
      query: (id) => `/sample/${id}`,
    }),
  }),
})

export const { useGetSampleByIdQuery } = landingApi
