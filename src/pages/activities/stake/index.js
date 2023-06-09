import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Slider from 'react-slick';
import { carousels } from './config';
import './index.less';

const Arrow = ({ direct, onClick }) => {
	const currentClass = useMemo(() => {
		const classes = ['arrow'];
		if (direct) classes.push(direct);
		return classes.join(' ');
	}, [direct]);

	return <div className={currentClass} onClick={onClick} role='none' />;
};

const Stake = memo(() => {
	const [width, setWidth] = useState(window.innerHeight);

	useEffect(() => {
		const resize = () => {
			setWidth(window.innerWidth);
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	const settings = useMemo(
		() => ({
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: width >= 1280 ? 4 : 2,
			slidesToScroll: width >= 1280 ? 4 : 2,
			arrow: true,
			nextArrow: <Arrow direct='next' />,
			prevArrow: <Arrow direct='prev' />,
		}),
		[width],
	);

	const className = useCallback((classFromConfig) => {
		const classes = ['stakeCarouselImage w-full border-white'];
		classes.push(classFromConfig);
		return classes.join(' ');
	}, []);

	return (
		<div className='Stake relative'>
			<div className='flex w-full flex-col items-center justify-center'>
				<div className='logo' />
				<div className='head mr-16 mt-20' />
			</div>
			<div className='w-full py-8 text-center text-xl'>
				<span className='mx-2 text-3xl font-medium tracking-widest text-primary'>10,000</span>
				玩樂金，旅遊服務任你選
			</div>

			<div className='w-full px-14'>
				<div className='w-full'>
					<Slider {...settings}>
						{carousels.map((item) => (
							<div
								key={JSON.stringify(item)}
								className='flex flex-col items-center justify-center space-y-4 p-2'
							>
								<div className={className(item.className)} />
								<h3 className='w-full text-center text-lg tracking-wider'>{item.text}</h3>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
});
export default Stake;
