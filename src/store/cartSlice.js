import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [
			// {
			// 	id: 1,
			// 	productId: 1,
			// 	quantity: 1,
			// 	priceCount: 200,
			// },
		],
		totalCount: 0,
		totalPrice: 0,
		delivery: 50,
		orderPrice: 0,
	},
	reducers: {
		addtoCart: (state, action) => {
			state.items.unshift(action.payload)
			state.totalPrice += action.payload.priceCount
			state.totalCount++
		},
		deleteCartItem: (state, action) => {
			const index = state.items.findIndex((item) => item.productId === action.payload)

			if (index !== -1) {
				const deletedItem = state.items.splice(index, 1)[0]
				state.totalPrice -= deletedItem.priceCount
				state.totalCount -= deletedItem.quantity
			}
		},
		minusQuantity: (state, action) => {
			const cartItem = state.items.find((item) => item.productId === action.payload.productId)

			if (cartItem.quantity > 1) {
				cartItem.quantity -= 1
				state.totalCount -= 1
				cartItem.priceCount -= action.payload.price
				state.totalPrice -= action.payload.price
			}
		},
		plusQuantity: (state, action) => {
			const cartItem = state.items.find((item) => item.productId === action.payload.productId)

			cartItem.quantity += 1
			state.totalCount += 1
			cartItem.priceCount += action.payload.price
			state.totalPrice += action.payload.price
		},
		calculateOrder: (state) => {
			if (state.totalPrice > 1000) {
				const discount = (state.totalPrice / 100) * 10
				const discountedPrice = state.totalPrice - discount
				state.orderPrice = Math.round(discountedPrice + state.delivery)
			} else {
				state.orderPrice = Math.round(state.totalPrice + state.delivery)
			}
		},
		compliteOrder: (state, action) => {
			const orderList = action.payload
				.map((product) => {
					const cartInfo = state.items.find((cartEl) => cartEl.productId === product.id)
					return {
						id: product.id,
						title: product.title,
						image: product.image,
						price: product.price,
						quantity: cartInfo.quantity,
						priceCount: cartInfo.priceCount,
					}
				})
				.reverse()

			const orderResult = {
				orderList,
				totalCount: state.totalCount,
				orderPrice: state.orderPrice,
			}

			console.log(orderResult)

			state.items = []
			state.totalCount = 0
			state.totalPrice = 0
			state.orderPrice = 0
		},
	},
})

export const {
	addtoCart,
	deleteCartItem,
	minusQuantity,
	plusQuantity,
	calculateOrder,
	compliteOrder,
} = cartSlice.actions

export default cartSlice.reducer
