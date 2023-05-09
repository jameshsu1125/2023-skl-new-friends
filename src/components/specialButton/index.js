import { memo, useEffect } from 'react';
import './index.less';

const SpecialButton = memo(({ children }) => {
	useEffect(() => {}, []);

	return (
		<div className='SpecialButton cursor-pointer rounded-l-full rounded-r-full bg-primary drop-shadow-md '>
			<div className='flex w-full flex-row items-center px-14 py-3 text-2xl tracking-widest text-white'>
				{children}
			</div>
		</div>
	);
});
export default SpecialButton;
