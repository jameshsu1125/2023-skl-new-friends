import { memo, useEffect } from 'react';
import './index.less';
import Block from '../../components/block';
import Carousel from './carousel';

const Box = ({ children }) => <div className='w-full xl:w-1/2'>{children}</div>;

const Lectures = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Lectures flex w-full items-center justify-center'>
			<Block>
				<div className='flex w-full justify-center xl:hidden'>
					<div className='head' />
				</div>
				<div className='flex w-full flex-col items-center justify-center xl:flex-row'>
					<Box>
						<Carousel />
					</Box>
					<Box>
						<div className='hidden w-full justify-center xl:flex'>
							<div className='head' />
						</div>
						<div className='w-full p-20'>
							專題講座資訊，專題講座資，訊專題講座資訊，專題講座資訊，專題講座資訊，專題講座資訊，專題講座資訊。專題講座資訊專題講座資，訊專題講座資，訊專題講座資訊。
						</div>
					</Box>
				</div>
			</Block>
		</div>
	);
});
export default Lectures;
