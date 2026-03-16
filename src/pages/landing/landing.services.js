import baseApi from "services/baseApi"


export const landingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVehicleDetailsById: build.query({
      query: (id) => `/vehicles/${id}`,
    }),
    getTopGeneralFeatures: build.query({
      query: () => `/vehicles/top-features`,
    }),
  }),
})

export const { useGetVehicleDetailsByIdQuery,
  useGetTopGeneralFeaturesQuery
} = landingApi
