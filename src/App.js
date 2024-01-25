import { useState, createContext, useEffect } from 'react'
import './App.scss'
import Main from './Pages/Main/Main'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart'
import useInnerWidth from './hooks/useInnerWidth'
import PriceBlock from './components/PriceBlock/PriceBlock'

export const sideBlockContext = createContext(null)

function App() {
	const [isMenu, setIsMenu] = useState(false)
	const [isCart, setIsCart] = useState(false)

	const width = useInnerWidth()

	useEffect(() => {
		if (isMenu || isCart) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = ''
		}
	}, [isMenu, isCart])

	const clickOnBlur = () => {
		setIsMenu(false)
		setIsCart(false)
	}

	return (
		<sideBlockContext.Provider value={{ isMenu, setIsMenu, isCart, setIsCart }}>
			<div className='App'>
				<Header />
				<main className='main'>
					<Main />
				</main>

				<div
					className={isMenu || isCart ? 'menuBlur active' : 'menuBlur'}
					onClick={clickOnBlur}
				/>
				<Menu />
				<Cart />
				{width < 768 ? (
					<div className='price-block'>
						<PriceBlock />
					</div>
				) : null}
			</div>
		</sideBlockContext.Provider>
	)
}

export default App
