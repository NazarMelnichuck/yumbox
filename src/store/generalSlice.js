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
			// {
			// 	id: 1,
			// 	img: 'https://fastly.picsum.photos/id/685/1235/505.jpg?hmac=ZvtSH2V5FkAq2BO0brHTSmVODNX_RGrdgpO66FX1hW4',
			// 	imgSmall: 'https://fastly.picsum.photos/id/440/535/505.jpg?hmac=W6n8RC3AhEyOlKCRcJEnB8YoFA7jlSNsfNKlorcyDXo',
			// 	href: '/product',
			// },
			// {
			// 	id: 2,
			// 	img: 'https://fastly.picsum.photos/id/27/1235/505.jpg?hmac=ECfaFYLn112J54IjaKjqY5jvj2RLPTkpg1R8pAjqdFA',
			// 	imgSmall: 'https://fastly.picsum.photos/id/11/535/505.jpg?hmac=rpjpU2zLOuGQuyRQNIYH9fFfO72FPX3v0WeM1NyH5CA',
			// 	href: '/product',
			// },
			// {
			// 	id: 3,
			// 	img: 'https://fastly.picsum.photos/id/357/1235/505.jpg?hmac=z5Gj4bITROV1avVo-tYRfGGuRJnaPTCAg_gWeAV3s08',
			// 	imgSmall: 'https://fastly.picsum.photos/id/965/535/505.jpg?hmac=4KEJma43lyJ7L4596VdHX6VrgCHIiP5BMA8wpV74NwI',
			// 	href: '/product',
			// },
		],
	},
	reducers: {},
})

// export const {  } = generalSlice.actions

export default generalSlice.reducer
