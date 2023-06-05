import { memo } from 'react';
import RegularButton from '../../components/regularButton';
import { openMatchHash } from '../../settings/config';
import './index.less';

const Match = memo(() => (
	<div className='Match relative w-full'>
		<div className='relative h-full w-full overflow-hidden'>
			<div className='center'>
				<div className='symbols' />
			</div>
		</div>
		<div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
			<div className='flex w-full flex-col items-center justify-center p-14 text-center text-3xl md:p-4 xl:mb-5 xl:mr-96 xl:w-[510px] xl:text-lg'>
				<div id='match' className='headline' />
				<div className='sub my-10' />
				<p className='pb-2 pt-5 leading-relaxed xl:leading-normal'>
					孕育新生命的期待、不安，初次接觸時的緊張，照顧時的不知所措……
				</p>
				<p className='pb-5 pt-2 leading-relaxed xl:leading-normal'>
					讓艾菲爾老師引導妳，一窺不同星座組合間的親子關係，來看看當妳遇到不同星座的寶寶，會迸出什麼樣的火花呢？
				</p>
				<div className='flex w-full items-center justify-center pt-60 xl:pt-10'>
					<div className='scale-[1.7] xl:scale-125'>
						<RegularButton
							onClick={() => {
								window.location.hash = openMatchHash;
							}}
						>
							開始配對
						</RegularButton>
					</div>
				</div>
			</div>
		</div>
	</div>
));
export default Match;
