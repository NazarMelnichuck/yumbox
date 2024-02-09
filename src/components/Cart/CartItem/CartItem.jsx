import React from 'react'
import c from './CartItem.module.scss'

import { ReactComponent as Bin } from '../../../assets/img/Cart/bin.svg'
import { ReactComponent as Minus } from '../../../assets/img/minus.svg'
import { ReactComponent as Plus } from '../../../assets/img/plus.svg'
import { useDispatch, useSelector } from 'react-redux'
import { calculateOrder, deleteCartItem } from '../../../store/cartSlice'
import { useDeleteFromCartMutation, useSetProductCountMutation } from '../../../store/services/api/cartApi'

const CartItem = (props) => {
	let { id, title, weight, icon, quantity, price, priceCount } = props
	const dispatch = useDispatch()
	const [deleteCartItem, { isLoading, isSuccess }] = useDeleteFromCartMutation()
	const [setProductCount, { isLoading: countLoading }] = useSetProductCountMutation()

	const deleteCart = (id) => {
		deleteCartItem(id)
	}

	const setCount = (action) => {
		if (action === 'plus') {
			quantity = quantity + 1
			priceCount = priceCount + price
			const product = {
				...props,
				quantity,
				priceCount,
			}
			setProductCount(product)
		}

		if (action === 'minus' && quantity > 1) {
			quantity = quantity - 1
			priceCount = priceCount - price

			const product = {
				...props,
				quantity,
				priceCount,
			}
			setProductCount(product)
		}
		dispatch(calculateOrder())
	}

	return (
		<li className={c.cartItem} key={id}>
			<div className={`${c.cartItem__info} ${c.cartItemInfo}`}>
				<div className={c.cartItemInfo__imgBlock}>
					<img className={c.cartItemInfo__img} src={`./products/${icon}`} alt='productIcon' />
				</div>
				<div className={c.cartItemInfo__text}>
					<h3 className={c.cartItemInfo__productTitle}>{title}</h3>
					<span className={c.cartItemInfo__produxtWeight}>{weight} гр</span>
				</div>
				<button
					className={c.cartItemInfo__delete}
					onClick={() => {
						deleteCart(id)
						dispatch(calculateOrder())
					}}>
					<Bin />
				</button>
			</div>
			<div className={`${c.cartItem__order} ${c.cartItemOrder}`}>
				<h4 className={c.cartItemOrder__price}>{priceCount} ₴</h4>
				<div className={c.cartItemOrder__countBlock}>
					<button
						className={c.cartItemOrder__coutnBtn}
						onClick={() => {
							setCount('minus')

							dispatch(calculateOrder())
						}}>
						<Minus />
					</button>
					<span className={c.cartItemOrder__count}>{quantity}</span>
					<button
						className={c.cartItemOrder__coutnBtn}
						onClick={() => {
							setCount('plus')
							// dispatch(plusQuantity({ productId, price }))
							dispatch(calculateOrder())
						}}>
						<Plus />
					</button>
				</div>
			</div>
		</li>
	)
}

export default CartItem
