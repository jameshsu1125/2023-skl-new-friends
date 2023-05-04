import { memo, useEffect } from 'react';
import './index.less';

const Container = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='Container flex w-full min-w-[640px] justify-center'>
			<div className='relative w-full max-w-3xl xl:max-w-7xl'>{children}</div>
		</div>
	);
});
export default Container;
