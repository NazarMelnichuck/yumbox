import { createSlice } from '@reduxjs/toolkit'

export const generalSlice = createSlice({
	name: 'general',
	initialState: {
		navigationItems: [
			{
				title: 'Каталог',
				href: '/',
			},
			{
				title: 'Кейтеринг',
				href: '/',
			},
			{
				title: 'Про нас',
				href: '/',
			},
			{
				title: 'Контакти',
				href: '/',
			},
		],
		sliderItems: [
			{
				id: 1,
				img: 'slide-1.png',
				imgSmall: 'slide-1-mob.png',
				href: '/',
			},
			{
				id: 2,
				img: 'slide-1.png',
				imgSmall: 'slide-1-mob.png',
				href: '/',
			},
			{
				id: 3,
				img: 'slide-1.png',
				imgSmall: 'slide-1-mob.png',
				href: '/',
			},
		],
	},
	reducers: {},
})

export const {} = generalSlice.actions

export default generalSlice.reducer
