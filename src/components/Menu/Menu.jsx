import { React, useContext } from 'react'
import c from './Menu.module.scss'

import PriceBlock from '../PriceBlock/PriceBlock'
import Nav from '../Nav/Nav'
import Contacts from '../Contacts/Contacts'
import SocialLinks from '../SocialLinks/SocialLinks'
import { sideBlockContext } from '../../App'

const Menu = () => {
	const { isMenu } = useContext(sideBlockContext)
	return (
		<div className={isMenu ? `${c.menu} ${c.active}` : c.menu}>
			<div className={c.menu__container}>
				<PriceBlock />
				<Nav />
				<Contacts />
				<SocialLinks />
			</div>
		</div>
	)
}

export default Menu
