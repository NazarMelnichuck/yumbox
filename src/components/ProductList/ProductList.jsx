import React from 'react'
import c from './ProductList.module.scss'
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux'

const ProductList = () => {
	const products = useSelector((state) => state.products.items)
	const cartItems = useSelector((state) => state.cart.items)

	const renderProducts = () => {
		return products.map((product) => {
			const cartInfo = cartItems.find((cartItem) => cartItem.productId === product.id)
			const quantity = cartInfo ? cartInfo.quantity : 0
			const priceCount = cartInfo ? cartInfo.priceCount : 0
			return (
				<ProductCard
					key={product.id}
					{...product}
					quantity={quantity}
					priceCount={priceCount}
				/>
			)
		})
	}

	return (
		<div className={c.products}>
			<div className={`${c.products} container`}>
				<h1 className={c.products__title}>Найчастіше замовляють</h1>
				<ul className={c.products__list}>{renderProducts()}</ul>
			</div>
		</div>
	)
}

export default ProductList
