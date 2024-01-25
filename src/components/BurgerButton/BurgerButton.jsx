import { React, useContext, useEffect, useRef } from 'react'
import c from './BurgerButton.module.css'
import { sideBlockContext } from '../../App'

const BurgerButton = () => {
	const { isMenu, setIsMenu, isCart, setIsCart } = useContext(sideBlockContext)
	const burgerBtn = useRef()

	const burgerClick = () => {
		if (!isMenu) {
			setIsMenu(true)
			if (isCart) {
				setIsCart(false)
			}
			burgerBtn.current.children[1].classList.add(`${c.active}`)
		} else {
			setIsMenu(false)
			burgerBtn.current.children[1].classList.remove(`${c.active}`)
		}
	}

	useEffect(() => {
		if (isCart || !isMenu) {
			burgerBtn.current.children[1].classList.remove(`${c.active}`)
		}
	}, [isCart, isMenu])

	return (
		<div className={c.header__burger} onClick={burgerClick} ref={burgerBtn}>
			<span className={c.header__burgerText}>Меню</span>
			<div className={c.headerbBurger}>
				<span></span>
			</div>
		</div>
	)
}

export default BurgerButton
