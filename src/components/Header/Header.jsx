import React, { useState, useEffect } from 'react'
import c from './Heder.module.scss'

import Menu from '../Menu/Menu'
import logo from '../../assets/img/logo.png'
import PriceBlock from '../PriceBlock/PriceBlock'
import Nav from '../Nav/Nav'
import BurgerButton from '../BurgerButton/BurgerButton'
import Cart from '../Cart/Cart'

const Header = () => {
	const [isMenu, setIsMenu] = useState(false)
	const [isCart, setIsCart] = useState(false)

	const [breakpoint, setBreakpoint] = useState(window.innerWidth)

	useEffect(() => {
		window.addEventListener('resize', checkWidth)
		return () => {
			window.removeEventListener('resize', checkWidth)
		}
	}, [])

	const checkWidth = () => {
		setBreakpoint(window.innerWidth)
	}

	const openMenu = (isOpen) => {
		setIsMenu(isOpen)
	}

	const openCart = (isOpen) => {
		setIsCart(isOpen)
	}

	return (
		<header className={c.header}>
			<div className={`${c.header__container} container`}>
				<a href='/'>
					<img className={c.header__logo} src={logo} alt='logo' />
				</a>
				{breakpoint > 768 ? <Nav /> : null}
				{breakpoint > 768 ? <PriceBlock openCart={openCart} isOpen={isCart} /> : null}
				{breakpoint < 768 ? <BurgerButton openMenu={openMenu} isOpen={isMenu} /> : null}
			</div>

			<Menu active={isMenu} />
			<Cart openCart={openCart} active={isCart} />
		</header>
	)
}

export default Header
