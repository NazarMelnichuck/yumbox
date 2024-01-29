import React from 'react'
import { useDispatch } from 'react-redux'
import c from './ProductCard.module.scss'

import mark from '../../assets/img/mark.png'
import { addtoCart, calculateOrder } from '../../store/cartSlice'

const ProductCard = ({ id, title, weight, image, quantity, price, priceCount }) => {
	const dispatch = useDispatch()

	const addCart = () => {
		const product = {
			id: Date.now(),
			productId: id,
			quantity: 1,
			priceCount: price,
		}
		dispatch(addtoCart(product))
		dispatch(calculateOrder())
	}

	return (
		<li className={c.productCard} key={id}>
			<div className={c.productCard__img}>
				<img src={`./products/${image}`} alt={title} />
			</div>
			<div className={c.productCard__info}>
				<div className={c.productCard__text}>
					<h2 className={c.productCard__infoTitle}>{title}</h2>
					<p className={c.productCard__infoWeigh}>{weight} гр</p>
				</div>
				<h3 className={c.productCard__price}>{price} грн</h3>

				{!quantity ? (
					<button
						className={`${c.productCard__btn} ${c.productCard__btn_addCart}`}
						onClick={addCart}
					>
						Добавити в кошик
					</button>
				) : (
					<div className={`${c.productCard__btn} ${c.productCard__btn_inCart}`}>
						<img src={mark} alt='mark' />
						<span>
							В кошику <strong>{quantity}</strong> шт за <strong>{priceCount} грн</strong>
						</span>
					</div>
				)}
			</div>
		</li>
	)
}

export default ProductCard
