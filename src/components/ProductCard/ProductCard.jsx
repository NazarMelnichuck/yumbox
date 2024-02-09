import React from 'react'
import { useDispatch } from 'react-redux'
import c from './ProductCard.module.scss'

import mark from '../../assets/img/mark.png'
// import { addtoCart, calculateOrder, changeQuantity } from '../../store/cartSlice'
import { useAddToCartMutation, useSetProductCountMutation } from '../../store/services/api/cartApi'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
	const dispatch = useDispatch()
	const [addToCartAPI, { isLoading }] = useAddToCartMutation()
	const [setProductCount, { isLoading: countLoading }] = useSetProductCountMutation()
	let { id, title, weight, image, quantity, price, priceCount } = props

	const addCart = (e) => {
		e.preventDefault()
		const product = {
			...props,
			quantity: 1,
			priceCount: price,
		}
		addToCartAPI(product)
	}

	// const changeCount = (e) => {
	// 	e.preventDefault()
	// 	quantity = quantity + 1
	// 	priceCount = priceCount + price
	// 	const product = {
	// 		...props,
	// 		quantity,
	// 		priceCount,
	// 	}

	// 	setProductCount(product)
	// }

	return (
		<li className={c.productCard} key={id}>
			<Link to={`product/${id}`}>
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
						<>
							{!isLoading ? (
								<button className={`${c.productCard__btn} ${c.productCard__btn_addCart}`} onClick={addCart}>
									Добавити в кошик
								</button>
							) : (
								<button className={`${c.productCard__btn}`}>
									<Loading width={17} />
								</button>
							)}
						</>
					) : (
						<button className={`${c.productCard__btn} ${c.productCard__btn_inCart}`}>
							<img src={mark} alt='mark' />
							<span>
								В кошику <strong>{quantity}</strong> шт за <strong>{priceCount} грн</strong>
							</span>
						</button>
					)}
				</div>
			</Link>
		</li>
	)
}

export default ProductCard
