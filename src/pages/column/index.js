import { memo } from 'react';
import GeneralButton from '../../components/generalButton';
import './index.less';

const Column = memo(() => (
	<div className='Column flex w-full items-center justify-center'>
		<div className='relative z-10 flex w-full flex-col items-center justify-start xl:flex-row'>
			<div className='relative w-full xl:w-1/2'>
				<div className='b' />
			</div>
			<div className='relative w-full xl:w-1/2'>
				<div className='flex flex-col items-center justify-center space-y-9 xl:pr-32'>
					<div className='headline' />
					<div className='w-full space-y-4 px-16 text-center text-2xl xl:px-0 xl:text-lg'>
						<p>
							天真浪漫的妳，在經歷各式不同的生活體驗後，也會成為強大的人，然而在面對生活中的種種挑戰時，妳是否常常對下一步感到茫然?
						</p>
						<p>
							讓我們透過測驗，
							<br />
							跟著艾菲爾的腳步一起窺探內在真實的自己吧!
						</p>
						<p className='pt-14'>
							不同星座的妳性格各異，是否也會好奇遇上不同星座的寶寶，會碰撞出怎樣的的火花呢?
							<br />
							從星座角度帶你看親子關係，一起實現未來的憧憬!
						</p>
					</div>
					<div className='flex w-full flex-col items-center justify-center xl:flex-row'>
						<GeneralButton
							color='secondary'
							onClick={() => {
								window.location.hash = 'test';
							}}
						>
							<span className='text-3xl font-bold tracking-widest text-secondary xl:mt-0 xl:text-xl'>
								探索你的
								<br />
								內心人格
							</span>
						</GeneralButton>
						<GeneralButton
							color='tertiary'
							onClick={() => {
								window.location.hash = 'match';
							}}
						>
							<span className='text-3xl font-bold tracking-widest text-tertiary xl:mt-0 xl:text-xl'>
								十二星座
								<br />
								親子關係
							</span>
						</GeneralButton>
					</div>
				</div>
			</div>
		</div>
	</div>
));
export default Column;
