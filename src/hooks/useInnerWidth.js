import { useState, useEffect } from 'react'

function useInnerWidth() {
	const [width, setwidth] = useState(window.innerWidth)

	useEffect(() => {
		window.addEventListener('resize', checkWidth)
		return () => {
			window.removeEventListener('resize', checkWidth)
		}
	}, [])

	const checkWidth = () => {
		setwidth(window.innerWidth)
	}

	return width
}

export default useInnerWidth
