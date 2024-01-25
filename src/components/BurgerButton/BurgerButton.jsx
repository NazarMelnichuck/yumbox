import { React, useContext, useEffect, useRef } from 'react'
import c from './BurgerButton.module.css'
import { sideBlockContext } from '../../App'

const BurgerButton = () => {
	const { isMenu, setIsMenu, isCart, setIsCart } = useContext(sideBlockContext)
	const burgerBtn = useRef()

	const burgerClick = (e) => {
		if (!isMenu) {
			setIsMenu(true)
			if (isCart) {
				setIsCart(false)
			}
			e.target.classList.add(c.active)
		} else {
			setIsMenu(false)
			e.target.classList.remove(c.active)
		}
	}

	useEffect(() => {
		if (isCart || !isMenu) {
			burgerBtn.current.classList.remove(`${c.active}`)
		}
	}, [isCart, isMenu])

	return (
		<div className={c.header__burger}>
			<span className={c.header__burgerText}>Меню</span>
			<div className={c.headerbBurger} onClick={burgerClick} ref={burgerBtn}>
				<span></span>
			</div>
		</div>
	)
}

export default BurgerButton
