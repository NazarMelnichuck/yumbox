import React from 'react'
import c from './BurgerButton.module.css'

const BurgerButton = ({ openMenu, isOpen }) => {
	const isMenu = (e) => {
		if (!isOpen) {
			openMenu(true)
			e.target.classList.add(c.active)
		} else {
			openMenu(false)
			e.target.classList.remove(c.active)
		}
	}

	return (
		<div className={c.header__burger}>
			<span className={c.header__burgerText}>Меню</span>
			<div className={c.headerbBurger} onClick={isMenu}>
				<span></span>
			</div>
		</div>
	)
}

export default BurgerButton
