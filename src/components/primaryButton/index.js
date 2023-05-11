import { memo, useMemo } from 'react';
import './index.less';

const PrimaryButton = memo(({ children, color = 'orange', onClick }) => {
	const className = useMemo(() => {
		const classes = ['PrimaryButton rounded-l-full rounded-r-full border-4 py-2 md:py-3 md:py-2'];
		if (color === 'orange') classes.push('border-secondary');
		else classes.push('border-primary');
		return classes.join(' ');
	}, [color]);

	return (
		<button className={className} type='button' onClick={() => onClick?.()}>
			<div className='w-96 md:w-72'>{children}</div>
		</button>
	);
});
export default PrimaryButton;
