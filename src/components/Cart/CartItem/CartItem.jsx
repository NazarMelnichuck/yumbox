import React from 'react'
import c from './CartItem.module.scss'

import productIcon from '../../../assets/img/Cart/product-icon.png'
import { ReactComponent as Bin } from '../../../assets/img/Cart/bin.svg'
import { ReactComponent as Minus } from '../../../assets/img/minus.svg'
import { ReactComponent as Plus } from '../../../assets/img/plus.svg'

const CartItem = () => {
	return (
		<div className={c.cartItem}>
			<div className={`${c.cartItem__info} ${c.cartItemInfo}`}>
				<div className={c.cartItemInfo__imgBlock}>
					<img className={c.cartItemInfo__img} src={productIcon} alt='productIcon' />
				</div>
				<div className={c.cartItemInfo__text}>
					<h3 className={c.cartItemInfo__productTitle}>Yumbox 21 сет суперкачний суперсет</h3>
					<span className={c.cartItemInfo__produxtWeight}>1500 гр</span>
				</div>
				<button className={c.cartItemInfo__delete}>
					<Bin />
				</button>
			</div>
			<div className={`${c.cartItem__order} ${c.cartItemOrder}`}>
				<h4 className={c.cartItemOrder__price}>799 ₴</h4>
				<div className={c.cartItemOrder__countBlock}>
					<button className={c.cartItemOrder__coutnBtn}>
						<Minus />
					</button>
					<span className={c.cartItemOrder__count}>1</span>
					<button className={c.cartItemOrder__coutnBtn}>
						<Plus />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
