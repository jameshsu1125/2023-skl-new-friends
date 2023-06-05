import { memo, useEffect } from 'react';
import './index.less';
import Block from '../../components/block';
import Carousel from './carousel';
import RegularButton from '../../components/regularButton';
import { LecturesURL } from '../../settings/config';

const Box = ({ children }) => <div className='w-full xl:w-1/2'>{children}</div>;

const Lectures = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Lectures flex w-full items-center justify-center py-20'>
			<Block>
				<div className='flex w-full justify-center xl:hidden'>
					<div className='head' />
				</div>
				<div className='flex w-full flex-col items-center justify-center xl:flex-row'>
					<Box>
						<Carousel />
					</Box>
					<Box>
						<div className='hidden w-full justify-center pt-10 xl:flex'>
							<div className='head' />
						</div>
						<div className='mt-16 flex w-full justify-center'>
							<div className='sub' />
						</div>

						<div className='w-full px-20 py-20 text-3xl xl:py-14 xl:text-xl'>
							專題講座資訊，專題講座資，訊專題講座資訊，專題講座資訊，專題講座資訊，專題講座資訊，專題講座資訊。專題講座資訊專題講座資，訊專題講座資，訊專題講座資訊。
						</div>
						<div className='flex w-full justify-center'>
							<RegularButton
								onClick={() => {
									window.open(LecturesURL);
								}}
							>
								了解更多
							</RegularButton>
						</div>
					</Box>
				</div>
			</Block>
		</div>
	);
});
export default Lectures;
