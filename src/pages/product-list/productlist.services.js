import baseApi from "services/baseApi"


export const productListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSampleById: build.query({
            query: (id) => `/sample/${id}`,
        }),
    }),
})

export const { useGetSampleByIdQuery } = productListApi
