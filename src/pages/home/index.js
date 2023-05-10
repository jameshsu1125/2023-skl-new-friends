import { memo, useEffect } from 'react';
import './index.less';

const Home = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Home flex w-full items-center justify-center overflow-hidden'>
			<div className='center'>
				<div className='symbols'>
					<div />
				</div>
				<div className='g' />
				<div className='f' />
				<div className='pattern' />
				<div className='txt'>
					<div className='flex flex-row justify-center text-5xl xl:text-2xl'>
						<div className='tracking-widest md:font-bold'>即日起</div>
						<span className='mx-2'>~</span>
						<div className='tracking-widest'>2023.12.31</div>
					</div>
				</div>
			</div>
		</div>
	);
});
export default Home;
