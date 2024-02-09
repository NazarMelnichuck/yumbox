import { React, useContext } from 'react'
import c from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

import { ReactComponent as Close } from '../../assets/img/close.svg'
import { sideBlockContext } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { changeQuantity, compliteOrder } from '../../store/cartSlice'
import { useGetCartQuery, useOrderCompliteMutation } from '../../store/services/api/cartApi'
import Loading from '../Loading/Loading'

const Cart = () => {
	const dispatch = useDispatch()
	const { isCart, setIsCart } = useContext(sideBlockContext)
	const cart = useSelector((state) => state.cart)
	const { data: cartResponse, isFetching } = useGetCartQuery()
	const [clearCart] = useOrderCompliteMutation()

	const renderCartItems = () => {
		if (!isFetching && cartResponse) {
			dispatch(changeQuantity(cartResponse))
			return cartResponse.map((cartEl) => {
				return <CartItem key={cartEl.id} {...cartEl} />
			})
		} else {
			return <Loading />
		}
	}

	const getOrder = () => {
		cartResponse.forEach((item) => {
			clearCart(item)
		})
		dispatch(compliteOrder(cartResponse))
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
					<button className={c.cart__orderConfirm} onClick={getOrder}>
						оформити за {cart.orderPrice} ₴
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
