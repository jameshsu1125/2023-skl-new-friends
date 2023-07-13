import { memo, useMemo } from 'react';
import Slider from 'react-slick';
import Block from '../../components/block';
import RegularButton from '../../components/regularButton';
import { LecturesInformation } from '../../settings/config';
import './index.less';

const Arrow = ({ direct, onClick }) => {
	const currentClass = useMemo(() => {
		const classes = ['arrow'];
		if (direct) classes.push(direct);
		return classes.join(' ');
	}, [direct]);

	return <div className={currentClass} onClick={onClick} role='none' />;
};

const Box = ({ children }) => <div className='w-full xl:w-1/2'>{children}</div>;

const Lectures = memo(() => {
	const settings = useMemo(
		() => ({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrow: true,
			autoplay: false,
			nextArrow: <Arrow direct='next' />,
			prevArrow: <Arrow direct='prev' />,
		}),
		[],
	);
	return (
		<div className='Lectures flex w-full items-center justify-center py-20'>
			<Block>
				<div className='flex w-full justify-center'>
					<div className='w-full px-14'>
						<Slider {...settings}>
							{[...new Array(LecturesInformation.length).keys()].map((index) => (
								<div key={LecturesInformation[index]} className='w-full'>
									<div className='flex w-full justify-center xl:hidden'>
										<div className={`head head-${index}`} />
									</div>
									<div className='relative flex w-full flex-col items-center justify-center xl:flex-row'>
										<Box>
											<div className='w-full p-5'>
												<div className={`img img-${index}`} />
											</div>
										</Box>
										<Box>
											<div className='hidden w-full justify-center pt-10 xl:flex'>
												<div className={`head head-${index}`} />
											</div>

											<div className='w-full p-10 text-justify text-3xl xl:p-20 xl:py-14 xl:text-xl'>
												{LecturesInformation[index].body}
											</div>
											<div className='flex w-full justify-center py-10'>
												<RegularButton
													onClick={() => {
														window.open(LecturesInformation[index].url);
													}}
												>
													了解更多
												</RegularButton>
											</div>
										</Box>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</Block>
		</div>
	);
});
export default Lectures;
