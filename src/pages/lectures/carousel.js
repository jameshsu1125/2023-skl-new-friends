import { memo, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import { numberOfCarousel } from './config';
import './index.less';

const Carousel = memo(() => {
	const settings = useMemo(
		() => ({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrow: false,
			autoplay: true,
		}),
		[],
	);
	useEffect(() => {}, []);
	return (
		<div className='carousel'>
			<div>
				<div className='relative h-full w-full'>
					<Slider {...settings}>
						{[...new Array(numberOfCarousel).keys()].map((index) => (
							<div key={index} className={`item${index}`} />
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
});
export default Carousel;
