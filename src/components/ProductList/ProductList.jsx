import React from 'react'
import c from './ProductList.module.scss'
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux'
// import { useGetProductsQuery } from '../../store/services/api/productsApi'
import { useGetCartQuery, useGetProductsQuery } from '../../store/services/api/cartApi'
import Loading from '../Loading/Loading'

const ProductList = () => {
	const { data: productsResponse, isLoading: productsIsLoading } = useGetProductsQuery()
	const { data: cartItemsResponse, isLoading: cartItemsisLoading } = useGetCartQuery()

	const renderProducts = () => {
		return productsResponse.map((product) => {
			const cartInfo = cartItemsResponse.find((cartItem) => cartItem.title === product.title)
			const quantity = cartInfo ? cartInfo.quantity : 0
			const priceCount = cartInfo ? cartInfo.priceCount : 0

			return <ProductCard key={product.title} {...product} quantity={quantity} priceCount={priceCount} />
		})
	}

	return (
		<div className={c.products}>
			<div className={`${c.products} container`}>
				<h1 className={c.products__title}>Найчастіше замовляють</h1>
				{!productsIsLoading && !cartItemsisLoading ? <ul className={c.products__list}>{renderProducts()}</ul> : <Loading />}
			</div>
		</div>
	)
}

export default ProductList
