/* eslint-disable react/jsx-one-expression-per-line */
import { memo } from 'react';
import Dialog from '../../../components/dialog';
import AllianceButton from './button';
import './index.less';

const Sup = ({ children }) => <span className='text-2xl text-primary'>{children}</span>;
const Underline = ({ children }) => (
	<div className='underLine relative font-semibold'>
		<div className='relative'>{children}</div>
	</div>
);

const Alliance = memo(() => (
	<div id='alliance' className='Alliance relative'>
		<div className='relative flex w-full flex-row items-center justify-center'>
			<div className='w-40 text-right tracking-widest'>
				直接
				<Sup>點</Sup>
				簡單
				<Sup>填</Sup>
			</div>
			<div className='head mx-8' />
			<div className='w-40 text-left tracking-widest'>
				<Sup>50點</Sup>
				輕鬆落袋
			</div>
		</div>
		<Dialog color='secondary'>
			<div className='flex w-full flex-col items-center justify-center p-2 text-xl tracking-widest xl:text-2xl'>
				<div>新朋友點選連結前往指定網頁，同步完成新光人壽</div>
				<div className='flex w-full flex-row items-center justify-center'>
					<Underline>「註冊網路會員」</Underline>及<Underline>「綁定LINE官方帳號」</Underline>
				</div>
			</div>
			<div className='flex w-full flex-row items-center justify-center space-x-4 text-xl tracking-widest xl:text-2xl'>
				<div>可獲得</div>
				<div className='point50' />
				<div>SK點數</div>
			</div>
			<AllianceButton />
			<div className='-my-3 text-center text-sm'>
				*每ID限參加一次。*
				<br />
				符合獲點資格者，隔日獲得25點、次月底獲得25點，共計50點。
				<br />
				*新朋友定義：成交新契約當下未持有新光⼈壽有效契約者。
			</div>
		</Dialog>
	</div>
));
export default Alliance;
