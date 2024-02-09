import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const cartApi = createApi({
	reducerPath: 'cartApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://65c3546939055e7482c09c04.mockapi.io/api/v1/' }),
	tagTypes: ['cartItems'],
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => `products`,
		}),
		getCart: builder.query({
			query: () => `cart`,
			providesTags: ['cartItems'],
		}),
		addToCart: builder.mutation({
			query: (productItem) => ({
				url: 'cart',
				method: 'POST',
				body: productItem,
			}),
			invalidatesTags: ['cartItems'],
		}),
		deleteFromCart: builder.mutation({
			query: (id) => ({
				url: `cart/${id}`,
				method: 'DELETE',
				body: id,
			}),
			invalidatesTags: ['cartItems'],
		}),
		setProductCount: builder.mutation({
			query: ({ id, ...rest }) => ({
				url: `cart/${id}`,
				method: 'PUT',
				body: rest,
			}),
			invalidatesTags: ['cartItems'],
		}),
		orderComplite: builder.mutation({
			query: ({ id, ...rest }) => ({
				url: `cart/${id}`,
				method: 'DELETE',
				body: rest,
			}),
			invalidatesTags: ['cartItems'],
		}),
	}),
})

export const { useGetCartQuery, useDeleteFromCartMutation, useGetProductsQuery, useAddToCartMutation, useSetProductCountMutation, useOrderCompliteMutation } = cartApi
