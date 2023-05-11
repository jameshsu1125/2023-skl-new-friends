import { memo, useEffect } from 'react';
import './index.less';

const SpecialButton = memo(({ children, onClick }) => {
	useEffect(() => {}, []);

	return (
		<button
			className='SpecialButton cursor-pointer rounded-l-full rounded-r-full bg-primary drop-shadow-md'
			type='button'
			onClick={() => onClick?.()}
		>
			<div className='flex w-full flex-row items-center px-14 py-3 text-2xl tracking-widest text-white'>
				{children}
			</div>
		</button>
	);
});
export default SpecialButton;
