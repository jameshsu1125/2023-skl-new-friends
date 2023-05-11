import { memo, useEffect } from 'react';
import GeneralButton from '../../components/generalButton';
import './index.less';

const Column = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Column flex w-full items-center justify-center'>
			<div className='relative flex w-full flex-col items-center justify-start xl:flex-row'>
				<div className='relative w-full xl:w-1/2'>
					<div className='b' />
				</div>
				<div className='relative w-full xl:w-1/2'>
					<div className='flex flex-col items-center justify-center space-y-9 xl:pr-32'>
						<div className='headline' />
						<div className='w-full px-20 text-justify text-3xl xl:px-0 xl:text-2xl'>
							星座專欄標題星座專欄標題星，座專欄標題星座專欄標題星座專欄標題星座專欄。
							星座專欄標題星座專欄標題。
						</div>
						<div className='flex w-full flex-col items-center justify-center xl:flex-row'>
							<GeneralButton
								color='tertiary'
								onClick={() => {
									window.location.hash = 'match';
								}}
							>
								<span className='text-3xl xl:text-base'>我是</span>
								<span className='mt-4 text-4xl font-bold tracking-widest text-tertiary xl:mt-0 xl:text-2xl'>
									新手/孕媽咪
								</span>
							</GeneralButton>
							<GeneralButton
								color='secondary'
								onClick={() => {
									window.location.hash = 'test';
								}}
							>
								<span className='text-3xl xl:text-base'>我是</span>
								<span className='mt-4 text-4xl font-bold tracking-widest text-secondary xl:mt-0 xl:text-2xl'>
									職場女性
								</span>
							</GeneralButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
export default Column;
