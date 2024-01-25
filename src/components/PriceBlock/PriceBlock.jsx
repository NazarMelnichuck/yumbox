import { React, useContext } from 'react'
import c from './PriceBlock.module.scss'
import { sideBlockContext } from '../../App'

const PriceBlock = () => {
	const { isMenu, setIsMenu, isCart, setIsCart } = useContext(sideBlockContext)

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
			<div className={c.priceBlock__count}>2</div>
			<span className={c.priceBlock__price}>1200 грн</span>
		</button>
	)
}

export default PriceBlock
