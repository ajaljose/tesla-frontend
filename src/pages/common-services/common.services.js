import baseApi from "services/baseApi"


export const commonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVehicleModels: build.query({
      query: () => `/vehicles/models`,
    }),
    getVehicleTypes: build.query({
      query: () => `/vehicles/types`,
    }),
  }),
})

export const { useGetVehicleModelsQuery,
  useGetVehicleTypesQuery
} = commonApi
