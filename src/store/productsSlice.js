import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		items: [
			{
				id: 1,
				title: 'Yumbox 1 сет',
				weight: 1500,
				image: 'product-1.jpg',
				icon: 'product-1-icon.png',
				price: 799,
			},
			{
				id: 2,
				title: 'Yumbox 2 сет',
				weight: 1500,
				image: 'product-1.jpg',
				icon: 'product-1-icon.png',
				price: 800,
			},
			{
				id: 3,
				title: 'Yumbox 3 сет',
				weight: 1500,
				image: 'product-1.jpg',
				icon: 'product-1-icon.png',
				price: 500,
			},
			{
				id: 4,
				title: 'Yumbox 4 сет',
				weight: 600,
				image: 'product-1.jpg',
				icon: 'product-1-icon.png',
				price: 799,
			},
			{
				id: 5,
				title: 'Yumbox 5 сет',
				weight: 1500,
				image: 'product-1.jpg',
				icon: 'product-1-icon.png',
				price: 300,
			},
			{
				id: 6,
				title: 'Yumbox 6 сет',
				weight: 1500,
				image: 'product-1.jpg',
				icon: 'product-1-icon.png',
				price: 1000,
			},
			{
				id: 7,
				title: 'Yumbox 7 сет',
				weight: 1500,
				image: 'product-1.jpg',
				icon: 'product-1-icon.png',
				price: 450,
			},
			{
				id: 8,
				title: 'Yumbox 8 сет',
				weight: 1500,
				image: 'product-1.jpg',
				icon: 'product-1-icon.png',
				price: 799,
			},
		],
	},
	reducers: {
		addtoCart: (state, action) => {
			console.log(action.payload)
			state.cart.push(action.payload)
		},
	},
})

export const { addtoCart } = productsSlice.actions

export default productsSlice.reducer
