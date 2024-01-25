import React from 'react'
import c from './Contacts.module.scss'

const Contacts = () => {
	return (
		<div className={c.contacts}>
			<a className={c.contacts__email} href='mailto:yumbox.lutsk@gmail.com'>
				yumbox.lutsk@gmail.com
			</a>
			<a className={c.contacts__phone} href='tel:+380938239293'>
				+380 93 823 92 93
			</a>
		</div>
	)
}

export default Contacts
