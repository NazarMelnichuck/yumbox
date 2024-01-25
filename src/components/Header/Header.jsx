import React, { useState, useEffect } from 'react'
import c from './Heder.module.scss'

import logo from '../../assets/img/logo.png'
import PriceBlock from '../PriceBlock/PriceBlock'
import Nav from '../Nav/Nav'
import BurgerButton from '../BurgerButton/BurgerButton'

const Header = () => {
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

	return (
		<header className={c.header}>
			<div className={`${c.header__container} container`}>
				<a href='/'>
					<img className={c.header__logo} src={logo} alt='logo' />
				</a>
				{breakpoint > 768 ? <Nav /> : null}
				{breakpoint > 768 ? <PriceBlock /> : null}
				{breakpoint < 768 ? <BurgerButton /> : null}
			</div>
		</header>
	)
}

export default Header
