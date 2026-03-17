import baseApi from "services/baseApi"


export const productListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSampleById: build.query({
            query: (id) => `/sample/${id}`,
        }),
        getVehicleDetails: build.query({
            query: (slug) => `/vehicles/${slug}`,
        }),
    }),
})

export const { useGetSampleByIdQuery, useGetVehicleDetailsQuery } = productListApi
