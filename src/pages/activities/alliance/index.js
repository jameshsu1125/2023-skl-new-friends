/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useEffect, useState } from 'react';
import Dialog from '../../../components/dialog';
import AllianceButton from './button';
import './index.less';

const Sup = ({ children }) => <span className='text-2xl font-bold text-primary'>{children}</span>;
const Underline = ({ children }) => (
	<div className='underLine relative font-semibold'>
		<div className='relative'>{children}</div>
	</div>
);

const Alliance = memo(() => {
	const [width, setWidth] = useState(window.innerHeight);
	useEffect(() => {
		const resize = () => {
			setWidth(window.innerWidth);
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, [width]);
	return (
		<div id='alliance' className='Alliance relative'>
			<div className='relative flex w-full flex-col items-center justify-center xl:flex-row'>
				{(width >= 1280 && (
					<>
						<div className='w-40 text-right tracking-[0.2rem]'>
							直接
							<Sup>點</Sup>
							簡單
							<Sup>填</Sup>
						</div>
						<div className='head mx-8 mb-8' />
						<div className='w-40 text-left tracking-[0.2rem]'>
							<Sup>50點</Sup>
							輕鬆落袋
						</div>
					</>
				)) || (
					<>
						<div className='head mx-8 mb-2' />
						<div className='flex w-full flex-row items-center justify-center space-x-10 pb-5'>
							<div className='w-40 text-right text-xl tracking-[0.2rem]'>
								直接
								<Sup>點</Sup>
								簡單
								<Sup>填</Sup>
							</div>
							<div className='w-40 text-left text-xl tracking-[0.2rem]'>
								<Sup>50點</Sup>
								輕鬆落袋
							</div>
						</div>
					</>
				)}
			</div>
			<Dialog color='secondary'>
				<div className='flex w-full flex-col justify-center p-2 text-3xl leading-relaxed tracking-widest xl:text-2xl'>
					<div className='text-center'>
						新朋友點選連結前往指定網頁，
						{width >= 1280 ? '' : <br />}
						同步完成新光人壽
					</div>
					{(width >= 1280 && (
						<div className='flex w-full flex-row items-center justify-center'>
							<Underline>「註冊網路會員」</Underline>及<Underline>「綁定LINE官方帳號」</Underline>
						</div>
					)) || (
						<>
							<div className='flex w-full flex-row items-center justify-center'>
								<Underline>「註冊網路會員」</Underline>及
							</div>
							<div className='flex w-full flex-row items-center justify-center'>
								<Underline>「綁定LINE官方帳號」</Underline>
							</div>
						</>
					)}
				</div>
				<div className='flex w-full flex-row items-center justify-center space-x-4 text-3xl tracking-widest xl:text-2xl'>
					<div>可獲得</div>
					<div className='point50' />
					<div>SK點數</div>
				</div>
				<AllianceButton />
				<div className='-my-3 px-5 text-center text-xl xl:text-sm'>
					*每ID限參加一次。*
					{width >= 1280 ? <br /> : ''}
					符合獲點資格者，隔日獲得25點、次月底獲得25點，共計50點。
					<br />
					*新朋友定義：{width >= 1280 ? '' : <br />}成交新契約當下未持有新光⼈壽有效契約者。
				</div>
			</Dialog>
		</div>
	);
});
export default Alliance;
