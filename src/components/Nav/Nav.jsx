import React from 'react'
import c from './Nav.module.scss'

const Nav = () => {
	return (
		<nav className={c.nav}>
			<ul className={c.nav__list}>
				<li className={c.nav__item}>
					<a href='/' className={c.nav__link}>
						Каталог
					</a>
				</li>
				<li className={c.nav__item}>
					<a href='/' className={c.nav__link}>
						Кейтеринг
					</a>
				</li>
				<li className={c.nav__item}>
					<a href='/' className={c.nav__link}>
						Про нас
					</a>
				</li>
				<li className={c.nav__item}>
					<a href='/' className={c.nav__link}>
						Контакти
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
