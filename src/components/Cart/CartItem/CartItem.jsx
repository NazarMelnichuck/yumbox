import React from 'react'
import c from './CartItem.module.scss'

import { ReactComponent as Bin } from '../../../assets/img/Cart/bin.svg'
import { ReactComponent as Minus } from '../../../assets/img/minus.svg'
import { ReactComponent as Plus } from '../../../assets/img/plus.svg'
import { useDispatch } from 'react-redux'
import {
	calculateOrder,
	deleteCartItem,
	minusQuantity,
	plusQuantity,
} from '../../../store/cartSlice'

const CartItem = ({ id, title, weight, icon, quantity, price, priceCount, productId }) => {
	const dispatch = useDispatch()

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
					onClick={() => dispatch(deleteCartItem(productId))}
				>
					<Bin />
				</button>
			</div>
			<div className={`${c.cartItem__order} ${c.cartItemOrder}`}>
				<h4 className={c.cartItemOrder__price}>{priceCount} ₴</h4>
				<div className={c.cartItemOrder__countBlock}>
					<button
						className={c.cartItemOrder__coutnBtn}
						onClick={() => {
							dispatch(minusQuantity({ productId, price }))
							dispatch(calculateOrder())
						}}
					>
						<Minus />
					</button>
					<span className={c.cartItemOrder__count}>{quantity}</span>
					<button
						className={c.cartItemOrder__coutnBtn}
						onClick={() => {
							dispatch(plusQuantity({ productId, price }))
							dispatch(calculateOrder())
						}}
					>
						<Plus />
					</button>
				</div>
			</div>
		</li>
	)
}

export default CartItem
