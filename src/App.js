import { useState, createContext, useEffect } from 'react'
import './App.scss'
import Main from './Pages/Main/Main'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import useInnerWidth from './hooks/useInnerWidth'
import PriceBlock from './components/PriceBlock/PriceBlock'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
		<BrowserRouter>
			<Provider store={store}>
				<sideBlockContext.Provider value={{ isMenu, setIsMenu, isCart, setIsCart }}>
					<div className='App'>
						<Header />
						<main className='main'>
							<Routes>
								<Route path='/' element={<Main />} />
							</Routes>
						</main>

						<div
							className={isMenu || isCart ? 'menuBlur active' : 'menuBlur'}
							onClick={clickOnBlur}
						/>
						<Cart />
						{width <= 768 ? (
							<div className='price-block'>
								<PriceBlock />
							</div>
						) : null}
					</div>
				</sideBlockContext.Provider>
			</Provider>
		</BrowserRouter>
	)
}

export default App
