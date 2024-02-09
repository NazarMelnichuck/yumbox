import React from 'react'
import c from './Product.module.scss'
import { useGetProductQuery } from '../../store/services/api/productsApi'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

const Product = () => {
	const params = useParams()
	const { data: product, isLoading } = useGetProductQuery(params.id)

	console.log(product)

	return (
		<div className={c.product}>
			{!isLoading ? (
				<div className={`${c.product__container} container`}>
					<div className={c.product__img}>
						<img src={`../../products/${product.image}`} alt={product.title} />
					</div>
					<div className={`${c.product__info} productInfo`}>
						<h1 className={c.productInfo__title}>{product.title}</h1>
						<h3 className={c.productInfo__price}>{product.price} грн</h3>
						<p className={c.productInfo__description}>{product.description}</p>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	)
}

export default Product
