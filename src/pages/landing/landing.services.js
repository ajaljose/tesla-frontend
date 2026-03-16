import baseApi from "services/baseApi"


export const landingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVehicleDetailsById: build.query({
      query: (id) => `/vehicles/${id}`,
    }),
  }),
})

export const { useGetVehicleDetailsByIdQuery } = landingApi
