import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const sliderApi = createApi({
	reducerPath: 'sliderApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://65c3546939055e7482c09c04.mockapi.io/api/v1/' }),
	endpoints: (builder) => ({
		getSliders: builder.query({
			query: () => `SliderItems`,
		}),
	}),
})

export const { useGetSlidersQuery } = sliderApi
