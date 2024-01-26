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
		totalPrice: 0,
		delivery: 50,
		orderPrice: 0,
	},
	reducers: {
		addtoCart: (state, action) => {
			state.items.unshift(action.payload)
			state.totalPrice += action.payload.priceCount
		},
		deleteCartItem: (state, action) => {
			const index = state.items.findIndex((item) => item.productId === action.payload)

			if (index !== -1) {
				const deletedItem = state.items.splice(index, 1)[0]
				state.totalPrice -= deletedItem.priceCount
			}
		},
		minusQuantity: (state, action) => {
			state.items.find((item) => {
				if (item.productId === action.payload.productId && item.quantity > 1) {
					if (item.quantity === 1) {
						return null
					}
					item.quantity -= 1
					item.priceCount -= action.payload.price
					state.totalPrice -= action.payload.price
				}

				return null
			})
		},
		plusQuantity: (state, action) => {
			state.items.find((item) => {
				if (item.productId === action.payload.productId) {
					item.quantity += 1
					item.priceCount += action.payload.price
					state.totalPrice += action.payload.price
				}
				return null
			})
		},
		calculateOrder: (state) => {
			if (state.totalPrice > 1000) {
				const discount = (state.totalPrice / 100) * 10
				const discountedPrice = state.totalPrice - discount
				state.orderPrice = discountedPrice - state.delivery
			} else {
				state.orderPrice = state.totalPrice - state.delivery
			}
		},
		compliteOrder: (state, action) => {
			const orderList = action.payload
				.map((product) => {
					const cartInfo = state.items.find((cartEl) => cartEl.productId === product.id)
					return {
						id: product.id,
						title: product.title,
						weight: product.weight,
						image: product.image,
						icon: product.icon,
						price: 799,
						cartId: cartInfo.id,
						quantity: cartInfo.quantity,
						priceCount: cartInfo.priceCount,
					}
				})
				.reverse()

			const orderResult = {
				orderList,
				orderPrice: state.orderPrice,
			}

			console.log(orderResult)

			state.items = []
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
