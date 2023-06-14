import Gtag from 'lesca-gtag';
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
							不論是在成長階段的妳、在職場奮鬥的妳，還是初為人母的妳，當歷經了不同的人生階段，
							過往生活的種種體驗都將使妳成為更強大的人，然而在面臨每個挑戰的當下，妳是否對下一步感到茫然呢?
						</p>
						<p>
							讓我們跟上艾菲爾老師的腳步，透過測驗一起窺探內在真實的自我!
							並從星座角度出發，帶妳發掘親子關係的不同面向，找到彼此的共處之道。
						</p>
					</div>
					<div className='flex w-full flex-col items-center justify-center xl:flex-row'>
						<GeneralButton
							color='secondary'
							onClick={() => {
								window.location.hash = 'test';
								Gtag.event('你夠瞭解自己嗎', '探索你的內心人格');
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
								Gtag.event('你夠瞭解自己嗎', '十二星座親子關係');
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
