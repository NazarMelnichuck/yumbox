import React from 'react'
import c from './SidePanell.module.scss'

const SidePanel = ({ children, active }) => {
	return (
		<div className={active ? `${c.sidePanel} ${c.active}` : c.sidePanel}>
			<div className={c.sidePanel__container}>{children}</div>
		</div>
	)
}

export default SidePanel
