import React from 'react'
import c from './Nav.module.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => {
	const navigationItems = useSelector((state) => state.general.navigationItems)
	return (
		<nav className={c.nav}>
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
	)
}

export default Nav
