import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import cartSlice from './cartSlice'
import generalSlice from './generalSlice'
import { sliderApi } from './services/api/sliderApi'
import { productsApi } from './services/api/productsApi'
import { cartApi } from './services/api/cartApi'

export default configureStore({
	reducer: {
		general: generalSlice,
		products: productsReducer,
		cart: cartSlice,
		[sliderApi.reducerPath]: sliderApi.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
		[cartApi.reducerPath]: cartApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sliderApi.middleware, productsApi.middleware, cartApi.middleware),
})
