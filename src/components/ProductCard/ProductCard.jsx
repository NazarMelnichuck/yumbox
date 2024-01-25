import React from 'react'
import c from './ProductCard.module.scss'

import productImage from '../../assets/img/products/product-1.jpg'
import mark from '../../assets/img/mark.png'

const ProductCard = () => {
	return (
		<li className={c.productCard}>
			<img className={c.productCard__img} src={productImage} alt='productImage' />
			<div className={c.productCard__info}>
				<div className={c.productCard__text}>
					<h2 className={c.productCard__infoTitle}>Yumbox 21 сет</h2>
					<p className={c.productCard__infoWeigh}>1500 гр</p>
				</div>
				<h3 className={c.productCard__price}>799 грн</h3>
				{/* <button className={`${c.productCard__btn} ${c.productCard__btn_addCart}`}>
					Добавити в кошик
				</button> */}
				<button className={`${c.productCard__btn} ${c.productCard__btn_inCart}`}>
					<img src={mark} alt='mark' />
					<span>
						В кошику <strong>1</strong> шт за <strong>728 грн</strong>
					</span>
				</button>
			</div>
		</li>
	)
}

export default ProductCard
