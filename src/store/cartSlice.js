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
		// minusQuantity: (state, action) => {
		// 	if (state.totalCount > 1) {
		// 		state.totalCount -= 1
		// 		// state.totalPrice -= action.payload.price
		// 	}
		// },
		// plusQuantity: (state, action) => {
		// 	state.totalCount += 1
		// },
		changeQuantity: (state, action) => {
			const cartItems = action.payload
			let calculatedPrice = null
			let calculateQuantity = null
			let calculateOrderPrice = null

			cartItems.forEach((item) => {
				calculatedPrice += item.priceCount
				calculateQuantity += item.quantity

				if (calculatedPrice > 1000) {
					const discount = (calculatedPrice / 100) * 10
					const discountedPrice = calculatedPrice - discount
					calculateOrderPrice = Math.round(discountedPrice + state.delivery)
				} else {
					calculateOrderPrice = Math.round(state.totalPrice + state.delivery)
				}
				if (calculateQuantity === 0) {
					calculateOrderPrice = 0
				}
			})

			state.totalPrice = calculatedPrice ? calculatedPrice : 0
			state.totalCount = calculateQuantity ? calculateQuantity : 0
			state.orderPrice = calculateOrderPrice ? calculateOrderPrice : 0
		},
		calculateOrder: (state, action) => {
			// if (state.totalPrice > 1000) {
			// 	const discount = (state.totalPrice / 100) * 10
			// 	const discountedPrice = state.totalPrice - discount
			// 	state.orderPrice = Math.round(discountedPrice + state.delivery)
			// } else {
			// 	state.orderPrice = Math.round(state.totalPrice + state.delivery)
			// }
			// if (state.totalCount === 0) {
			// 	state.orderPrice = 0
			// }
			// console.log(state.orderPrice)
		},
		compliteOrder: (state, action) => {
			const orderList = action.payload
			const orderResult = {
				orderList,
				totalCount: state.totalCount,
				orderPrice: state.orderPrice,
			}

			console.log(orderResult)
		},
	},
})

export const { addtoCart, deleteCartItem, changeQuantity, calculateOrder, compliteOrder } = cartSlice.actions

export default cartSlice.reducer
