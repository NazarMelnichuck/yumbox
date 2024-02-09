import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://65c3546939055e7482c09c04.mockapi.io/api/v1/' }),
	tagTypes: ['cartItems'],

	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => `cart`,
		}),
		getProduct: builder.query({
			query: (id) => `cart/${id}`,
		}),
		addToCart: builder.mutation({
			query: (productItem) => ({
				url: 'cart',
				method: 'POST',
				body: productItem,
				provideTags: ['cartItems'],
			}),
			invalidatesTags: ['cartItems'],
		}),
	}),
})

export const { useGetProductQuery } = productsApi
