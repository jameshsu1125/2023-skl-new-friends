import { memo, useEffect, useMemo } from 'react';
import './index.less';

const GeneralButton = memo(({ children, color = 'primary' }) => {
	useEffect(() => {}, []);

	const className = useMemo(() => {
		const classes = ['GeneralButton rounded-l-full rounded-r-full m-5 drop-shadow-xl'];
		if (color) classes.push(`border-${color}`);
		return classes.join(' ');
	}, [color]);

	return (
		<button className={className} type='button'>
			<div className='flex h-full w-[22rem] flex-col items-center justify-center py-6 tracking-widest xl:w-48 xl:py-3'>
				{children}
			</div>
		</button>
	);
});
export default GeneralButton;
