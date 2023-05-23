/* eslint-disable react/jsx-one-expression-per-line */
import { memo } from 'react';
import RegularButton from '../../components/regularButton';
import './index.less';

const Test = memo(() => (
	<div id='test' className='Test relative flex w-full items-center justify-center'>
		<div className='center'>
			<div className='symbol' />
		</div>
		<div className='absolute top-0 h-full w-full xl:pl-[30.5%]'>
			<div className='flex h-full w-full flex-col items-center justify-center'>
				<div className='headline' />
				<div className='sub my-5' />
				<div className='w-full space-y-10 px-20 py-10 text-center text-2xl xl:space-x-0 xl:py-7 xl:text-xl xl:tracking-widest'>
					<p className='font-medium'>
						憑藉直覺走入，一起探索內心的自己
						<br />
						會如何面對挑戰與危機處理
					</p>
				</div>
				<div className='flex w-full items-center justify-center pt-48 xl:pt-24'>
					<div className='scale-[1.7] xl:scale-125'>
						<RegularButton
							onClick={() => {
								window.open('./test.html');
							}}
						>
							開始測試
						</RegularButton>
					</div>
				</div>
			</div>
		</div>
	</div>
));
export default Test;
