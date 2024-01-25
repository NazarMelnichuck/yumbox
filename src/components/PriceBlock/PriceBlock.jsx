import React from 'react'
import c from './PriceBlock.module.scss'

const PriceBlock = ({ openCart, isOpen }) => {
	const isCart = (e) => {
		if (!isOpen) {
			openCart(true)
		} else {
			openCart(false)
		}
	}
	return (
		<button className={c.priceBlock} onClick={isCart}>
			<div className={c.priceBlock__count}>2</div>
			<span className={c.priceBlock__price}>1200 грн</span>
		</button>
	)
}

export default PriceBlock
