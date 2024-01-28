import React from 'react'
import c from './Heder.module.scss'

import logo from '../../assets/img/logo.png'
import PriceBlock from '../PriceBlock/PriceBlock'
import Nav from '../Nav/Nav'
import BurgerButton from '../BurgerButton/BurgerButton'
import useInnerWidth from '../../hooks/useInnerWidth'
import { Link } from 'react-router-dom'

const Header = () => {
	const width = useInnerWidth()

	return (
		<header className={c.header}>
			<div className={`${c.header__container} container`}>
				<Link to='/'>
					<img className={c.header__logo} src={logo} alt='logo' />
				</Link>
				{width > 768 ? <Nav /> : null}
				{width > 768 ? <PriceBlock /> : null}
				{width < 768 ? <BurgerButton /> : null}
			</div>
		</header>
	)
}

export default Header
