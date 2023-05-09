import { memo, useEffect } from 'react';
import './index.less';

const Home = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Home flex h-full w-full items-center justify-center'>
			<div className='center'></div>
		</div>
	);
});
export default Home;
