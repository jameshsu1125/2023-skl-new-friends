import { memo, useEffect } from 'react';
import './index.less';
import RegularButton from '../../components/regularButton';

const Match = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Match relative w-full'>
			<div className='relative h-full w-full overflow-hidden'>
				<div className='center'>
					<div className='symbols' />
				</div>
			</div>
			<div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
				<div className='flex w-full flex-col items-center justify-center space-y-14 p-14 text-center text-3xl xl:mb-5 xl:mr-96 xl:w-[500px] xl:space-y-1 xl:text-xl'>
					<div className='headline' />
					<p className='py-5 leading-relaxed xl:leading-normal'>
						擁有新生命或與寶貝接觸時，
						<br />
						想必充滿了緊張與期待！
					</p>
					<p className='py-5 leading-relaxed xl:leading-normal'>
						讓艾菲爾老師來引導你，找到屬於自己的星座，來看看你遇到不同的星座的寶貝時，
						<br />
						可以如何相處呢？
					</p>
					<div className='flex w-full items-center justify-center pt-60 xl:pt-10'>
						<div className='scale-[1.7] xl:scale-125'>
							<RegularButton>開始配對</RegularButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
export default Match;
