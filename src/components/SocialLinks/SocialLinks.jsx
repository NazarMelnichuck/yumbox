import React from 'react'
import c from './SocialLinks.module.scss'

import { ReactComponent as Linkadin } from '../../assets/img/socilas/linkedin.svg'
import { ReactComponent as Inst } from '../../assets/img/socilas/inst.svg'
import { ReactComponent as Fb } from '../../assets/img/socilas/fb.svg'

const SocialLinks = () => {
	return (
		<div className={c.socialsLinks}>
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
	)
}

export default SocialLinks
