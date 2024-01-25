import { React, useContext } from 'react'
import c from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

import { ReactComponent as Close } from '../../assets/img/close.svg'
import { sideBlockContext } from '../../App'

const Cart = () => {
	const { isCart, setIsCart } = useContext(sideBlockContext)

	return (
		<div className={isCart ? `${c.cart} ${c.active}` : c.cart}>
			<div className={c.cart__container}>
				<div className={c.cart__top}>
					<div className={c.cart__header}>
						<h1 className={c.cart__headerTitle}>Корзина</h1>
						<button className={c.cart__closeBtn} onClick={() => setIsCart(false)}>
							<Close />
						</button>
					</div>
					<div className={c.cart__list}>
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</div>
				</div>
				<div className={c.cart__order}>
					<dl className={`${c.cart__orderInfo} ${c.orderInfo}`}>
						<dt className={c.orderInfo__key}>Доставка</dt>
						<dd className={c.orderInfo__value}>50 ₴</dd>
					</dl>
					<button className={c.cart__orderConfirm}>оформити за 1 799 ₴</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
