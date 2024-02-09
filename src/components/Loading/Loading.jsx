import React from 'react'
import c from './Loading.module.scss'

const Loading = ({ width }) => {
	return (
		<div className={c.loading}>
			<img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif' style={{ width: width }} alt='loading' />
		</div>
	)
}

export default Loading
