import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API} from '../constants'



export const currencyAPI = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    reducerPath: 'currencyAPI',
    endpoints: (build) => ({
        getCurrency: build.query({
            query: () => '/',

        }),
    }),
})

export const { useGetCurrencyQuery,  } = currencyAPI
