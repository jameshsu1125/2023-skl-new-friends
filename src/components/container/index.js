import { memo, useEffect } from 'react';
import './index.less';

const Container = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='Container flex w-full justify-center'>
			<div className='relative w-full max-w-3xl bg-secondaryBackground xl:max-w-7xl'>
				{children}
			</div>
		</div>
	);
});
export default Container;
