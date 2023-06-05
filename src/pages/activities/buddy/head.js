/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useEffect, useState } from 'react';

const Sup = ({ children }) => <span className='text-2xl font-bold text-primary'>{children}</span>;

const BuddyHead = memo(() => {
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
		<div className='z-10 flex w-full flex-col items-center justify-center xl:flex-row'>
			{(width >= 1280 && (
				<>
					<div className='z-10 w-40 text-right tracking-[0.2rem]'>月月簽到月月抽</div>
					<div className='BuddyHead z-10 mx-8' />
					<div className='z-10 w-40 text-left tracking-widest'>
						當月再購
						<Sup>10次</Sup>抽
					</div>
				</>
			)) || (
				<>
					<div className='BuddyHead z-10 mx-8' />
					<div className='z-10 flex w-full flex-row items-end justify-center space-x-10'>
						<div className='w-48 text-right text-xl tracking-widest'>月月簽到月月抽</div>
						<div className='w-48 text-left text-xl tracking-widest'>
							當月再購
							<Sup>10次</Sup>抽
						</div>
					</div>
				</>
			)}
		</div>
	);
});
export default BuddyHead;
