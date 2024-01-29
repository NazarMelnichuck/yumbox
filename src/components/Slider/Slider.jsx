import React from 'react'
import c from './Slider.module.scss'
import './Swiper.scss'

import sticker from '../../assets/img/sales/sticker.png'
import { ReactComponent as PrevBtn } from '../../assets/img/sales/prev-btn.svg'
import { ReactComponent as NextBtn } from '../../assets/img/sales/next-btn.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Slider = () => {
	const sliderItems = useSelector((state) => state.general.sliderItems)
	return (
		<div className={c.salesSlider}>
			<div className={`${c.salesSlider__container} container`}>
				<Swiper
					className={c.salesSlider__slider}
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					loop={true}
					// autoplay={{ delay: 5000 }}
					navigation={{
						prevEl: '.prev-button',
						nextEl: '.next-button',
					}}
					pagination={{ clickable: true }}
				>
					<img className={c.salesSlider__sticker} src={sticker} alt='sticker' />
					<div>
						{sliderItems.map((slider) => {
							return (
								<SwiperSlide key={slider.id}>
									<Link className={c.salesSlider__link} to={slider.href}>
										<picture className={c.salesSlider__picture}>
											<source
												className={c.salesSlider__img}
												srcSet={`./sliders/${slider.imgSmall}`}
												media='(max-width: 575px)'
											/>
											<img
												className={c.salesSlider__img}
												src={`./sliders/${slider.img}`}
												alt='product'
											/>
										</picture>
									</Link>
								</SwiperSlide>
							)
						})}
					</div>
					<div className={c.salesSlider__navigations}>
						<PrevBtn className={`${c.salesSlider__navigateBtn} prev-button`} />
						<NextBtn className={`${c.salesSlider__navigateBtn} next-button`} />
					</div>
				</Swiper>
			</div>
		</div>
	)
}

export default Slider
