import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		value: 0,
	},
	reducers: {
		test: (state) => {
			state.value = +1
		},
	},
})

export const { test } = productsSlice.actions

export default productsSlice.reducer
