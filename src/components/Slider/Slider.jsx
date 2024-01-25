import React from 'react'
import c from './Slider.module.scss'
import './Swiper.scss'

import slide from '../../assets/img/sales/images/slide-1.png'
import slideMob from '../../assets/img/sales/images/slide-1-mob.png'
import sticker from '../../assets/img/sales/sticker.png'
import prev from '../../assets/img/sales/prev-btn.png'
import next from '../../assets/img/sales/next-btn.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

const Slider = () => {
	return (
		<div className={c.salesSlider}>
			<div className={`${c.salesSlider__container} container`}>
				<Swiper
					className={c.salesSlider__slider}
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 5000 }}
					navigation={{
						prevEl: '.prev-button',
						nextEl: '.next-button',
					}}
					pagination={{ clickable: true }}
				>
					<img className={c.salesSlider__sticker} src={sticker} alt='sticker' />
					<div>
						<SwiperSlide>
							<a className={c.salesSlider__link} href='/'>
								<picture>
									<source srcSet={slideMob} media='(max-width: 768px)' />
									<img className={c.salesSlider__img} src={slide} alt='product' />
								</picture>
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a className={c.salesSlider__link} href='/'>
								<picture>
									<source srcSet={slideMob} media='(max-width: 768px)' />
									<img className={c.salesSlider__img} src={slide} alt='product' />
								</picture>
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a className={c.salesSlider__link} href='/'>
								<picture>
									<source srcSet={slideMob} media='(max-width: 768px)' />
									<img className={c.salesSlider__img} src={slide} alt='product' />
								</picture>
							</a>
						</SwiperSlide>
					</div>
					<div className={c.salesSlider__navigations}>
						<img className='prev-button' src={prev} alt='prev' />
						<img className='next-button' src={next} alt='next' />
					</div>
				</Swiper>
			</div>
		</div>
	)
}

export default Slider
