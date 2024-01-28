import { createSlice } from '@reduxjs/toolkit'

export const generalSlice = createSlice({
	name: 'general',
	initialState: {
		navigationItems: [
			{
				title: 'Каталог',
				href: '/catalog',
			},
			{
				title: 'Кейтеринг',
				href: '/catering',
			},
			{
				title: 'Про нас',
				href: '/about',
			},
			{
				title: 'Контакти',
				href: '/contacts',
			},
		],
		sliderItems: [
			{
				id: 1,
				img: 'slide-1.png',
				imgSmall: 'slide-1-mob.png',
				href: '/product',
			},
			{
				id: 2,
				img: 'slide-1.png',
				imgSmall: 'slide-1-mob.png',
				href: '/product',
			},
			{
				id: 3,
				img: 'slide-1.png',
				imgSmall: 'slide-1-mob.png',
				href: '/product',
			},
		],
	},
	reducers: {},
})

// export const {} = generalSlice.actions

export default generalSlice.reducer
