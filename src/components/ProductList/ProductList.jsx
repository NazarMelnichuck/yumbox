import React from 'react'
import c from './ProductList.module.scss'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = () => {
	return (
		<div className={c.products}>
			<div className={`${c.products} container`}>
				<h1 className={c.products__title}>Найчастіше замовляють</h1>
				<ul className={c.products__list}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</ul>
			</div>
		</div>
	)
}

export default ProductList
