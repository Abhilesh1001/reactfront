import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const rootApi = createApi({
  
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/" }),
  endpoints: (builder) => ({
    getSingleProd: builder.query({
      query: (id) =>{
        // console.log(id)
        return {
            url : `newshop/singelprodview/${id}`,
            method : 'GET'
        }
      }}),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetSingleProdQuery} = rootApi
