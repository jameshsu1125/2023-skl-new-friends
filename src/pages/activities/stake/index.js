import { memo, useEffect } from 'react';
import './index.less';

const Stake = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Stake relative pt-20'>
			<div className='flex w-full justify-center'>
				<div className='head' />
			</div>
			<div className='w-full py-8 text-center text-xl'>
				<span className='mx-2 text-3xl font-medium tracking-widest text-primary'>10,000</span>
				玩樂金，旅遊服務任你選
			</div>
			<div className='logo' />

			<div className='w-full p-5'>asdsad</div>
		</div>
	);
});
export default Stake;
