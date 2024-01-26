import React from 'react'
import c from './Nav.module.scss'
import { useSelector } from 'react-redux'

const Nav = () => {
	const navigationItems = useSelector((state) => state.general.navigationItems)
	return (
		<nav className={c.nav}>
			<ul className={c.nav__list}>
				{navigationItems.map((link) => {
					return (
						<li className={c.nav__item} key={link.title}>
							<a href={link.href} className={c.nav__link}>
								{link.title}
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Nav
