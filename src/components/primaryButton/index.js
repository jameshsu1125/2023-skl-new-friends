import { memo, useMemo } from 'react';
import './index.less';

const PrimaryButton = memo(({ children, color = 'orange' }) => {
	const className = useMemo(() => {
		const classes = ['PrimaryButton rounded-l-full rounded-r-full border-4 px-10 py-2'];
		if (color === 'orange') classes.push('border-secondary');
		else classes.push('border-primary');
		return classes.join(' ');
	}, [color]);

	return (
		<button className={className} type='button'>
			{children}
		</button>
	);
});
export default PrimaryButton;
