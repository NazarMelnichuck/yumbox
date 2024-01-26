import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import cartSlice from './cartSlice'
import generalSlice from './generalSlice'

export default configureStore({
	reducer: {
		general: generalSlice,
		products: productsReducer,
		cart: cartSlice,
	},
})
