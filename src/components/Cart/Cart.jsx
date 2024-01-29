import { React, useState, useContext, useEffect } from 'react'
import c from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

import { ReactComponent as Close } from '../../assets/img/close.svg'
import { sideBlockContext } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { calculateOrder, compliteOrder } from '../../store/cartSlice'

const Cart = () => {
	const dispatch = useDispatch()
	const { isCart, setIsCart } = useContext(sideBlockContext)
	const [cartList, setCartList] = useState([])
	const products = useSelector((state) => state.products.items)
	const cart = useSelector((state) => state.cart)

	useEffect(() => {
		setCartList(
			cart.items.map((cartEl) => {
				const cartItem = products.find((productEl) => cartEl.productId === productEl.id)
				return { ...cartItem }
			})
		)
	}, [cart.items, products])

	const renderCartItems = () => {
		return cart.items.map((cartEl) => {
			const cartItem = products.find((productEl) => cartEl.productId === productEl.id)
			const quantity = cartEl ? cartEl.quantity : 0
			const priceCount = cartEl ? cartEl.priceCount : 0
			const productId = cartEl.productId

			return (
				<CartItem
					key={cartItem.id}
					{...cartItem}
					quantity={quantity}
					priceCount={priceCount}
					productId={productId}
				/>
			)
		})
	}

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
					<ul className={c.cart__list}>{renderCartItems()}</ul>
				</div>
				<div className={c.cart__order}>
					<dl className={`${c.cart__orderInfo} ${c.orderInfo}`}>
						<dt className={c.orderInfo__key}>Доставка</dt>
						<dd className={c.orderInfo__value}>50 ₴</dd>
					</dl>
					<button
						className={c.cart__orderConfirm}
						onClick={() => {
							dispatch(compliteOrder(cartList))
							dispatch(calculateOrder())
						}}
					>
						оформити за {cart.orderPrice} ₴
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
