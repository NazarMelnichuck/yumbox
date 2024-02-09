import React from 'react'
import c from './Product.module.scss'
import { useGetProductQuery } from '../../store/services/api/productsApi'
import { useParams } from 'react-router-dom'

const Product = () => {
	const params = useParams()
	console.log(params)
	// const {} = useGetProductQuery()

	return (
		<div className={c.product}>
			<div className={`${c.product__container} container`}>
				<div className={c.product__img}>
					<img src='' alt='' />
				</div>
				<div className={`${c.product__info} productInfo`}>
					<h1 className={c.productInfo__title}></h1>
					<p className={c.productInfo__description}></p>
				</div>
			</div>
		</div>
	)
}

export default Product
