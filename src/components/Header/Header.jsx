import React, { useContext, useEffect, useRef } from 'react'
import c from './Heder.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { sideBlockContext } from '../../App'

import logo from '../../assets/img/logo.png'
import PriceBlock from '../PriceBlock/PriceBlock'
import useInnerWidth from '../../hooks/useInnerWidth'
import { ReactComponent as Linkadin } from '../../assets/img/socilas/linkedin.svg'
import { ReactComponent as Inst } from '../../assets/img/socilas/inst.svg'
import { ReactComponent as Fb } from '../../assets/img/socilas/fb.svg'

const Header = () => {
	const width = useInnerWidth()
	const navigationItems = useSelector((state) => state.general.navigationItems)
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
		<header className={c.header}>
			<div className={`${c.header__container} container`}>
				<Link to='/'>
					<img className={c.header__logo} src={logo} alt='logo' />
				</Link>
				{width > 768 ? (
					<nav className={`${c.header__nav} ${c.nav}`}>
						<ul className={c.nav__list}>
							{navigationItems.map((link) => {
								return (
									<li className={c.nav__item} key={link.title}>
										<Link to={link.href} className={c.nav__link}>
											{link.title}
										</Link>
									</li>
								)
							})}
						</ul>
					</nav>
				) : null}
				{width > 768 ? <PriceBlock /> : null}
				<div className={c.header__burger} onClick={burgerClick} ref={burgerBtn}>
					<span className={c.header__burgerText}>Меню</span>
					<div className={c.headerbBurger}>
						<span></span>
					</div>
				</div>
			</div>
			<div className={isMenu ? `${c.menu} ${c.active}` : c.menu}>
				<div className={c.menu__container}>
					<PriceBlock />
					<nav className={`${c.menu__nav} ${c.nav}`}>
						<ul className={c.nav__list}>
							{navigationItems.map((link) => {
								return (
									<li className={c.nav__item} key={link.title}>
										<Link to={link.href} className={c.nav__link}>
											{link.title}
										</Link>
									</li>
								)
							})}
						</ul>
					</nav>
					<div className={`${c.menu__contacts} ${c.contacts}`}>
						<a className={c.contacts__email} href='mailto:yumbox.lutsk@gmail.com'>
							yumbox.lutsk@gmail.com
						</a>
						<a className={c.contacts__phone} href='tel:+380938239293'>
							+380 93 823 92 93
						</a>
					</div>
					<div className={`${c.menu__socialsLinks} ${c.socialsLinks}`}>
						<a href='https://www.linkedin.com/feed/'>
							<Linkadin className={c.socialsLinks__icon} />
						</a>
						<a href='https://www.instagram.com/?hl=uk'>
							<Inst className={c.socialsLinks__icon} />
						</a>
						<a href='https://www.facebook.com/'>
							<Fb className={c.socialsLinks__icon} />
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
