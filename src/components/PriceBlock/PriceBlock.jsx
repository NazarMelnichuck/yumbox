import { React, useContext } from 'react'
import c from './PriceBlock.module.scss'
import { sideBlockContext } from '../../App'
import { useSelector } from 'react-redux'

const PriceBlock = () => {
	const { isMenu, setIsMenu, isCart, setIsCart } = useContext(sideBlockContext)
	const totalPrice = useSelector((state) => state.cart.totalPrice)
	const totalCount = useSelector((state) => state.cart.totalCount)

	const cartClick = (e) => {
		if (!isCart) {
			if (isMenu) {
				setIsMenu(false)
			}
			setIsCart(true)
		} else {
			setIsCart(false)
		}
	}
	return (
		<button className={c.priceBlock} onClick={cartClick}>
			<div className={c.priceBlock__count}>{totalCount}</div>
			<span className={c.priceBlock__price}>{totalPrice} грн</span>
		</button>
	)
}

export default PriceBlock
