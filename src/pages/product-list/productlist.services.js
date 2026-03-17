import baseApi from "services/baseApi"


export const productListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query({
            query: ({ name, model, range, type, page = 1, limit = 10 }) => {
                const params = new URLSearchParams({
                    name,
                    model,
                    range,
                    type,
                    page,
                    limit,
                });

                return `/vehicles/search?${params.toString()}`;
            },
        }),
    }),
})

export const { useGetCarsQuery } = productListApi
