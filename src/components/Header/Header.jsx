import React from 'react'
import c from './Heder.module.scss'

import logo from '../../assets/img/logo.png'
import PriceBlock from '../PriceBlock/PriceBlock'
import Nav from '../Nav/Nav'
import BurgerButton from '../BurgerButton/BurgerButton'
import useInnerWidth from '../../hooks/useInnerWidth'

const Header = () => {
	const width = useInnerWidth()

	return (
		<header className={c.header}>
			<div className={`${c.header__container} container`}>
				<a href='/'>
					<img className={c.header__logo} src={logo} alt='logo' />
				</a>
				{width > 768 ? <Nav /> : null}
				{width > 768 ? <PriceBlock /> : null}
				{width < 768 ? <BurgerButton /> : null}
			</div>
		</header>
	)
}

export default Header
