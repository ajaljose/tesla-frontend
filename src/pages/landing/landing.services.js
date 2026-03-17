import baseApi from "services/baseApi"


export const landingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVehicleDetailsByRandom: build.query({
      query: () => `/vehicles/random`,
    }),
    getTopGeneralFeatures: build.query({
      query: () => `/vehicles/top-features`,
    }),
  }),
})

export const { useGetVehicleDetailsByRandomQuery,
  useGetTopGeneralFeaturesQuery
} = landingApi
