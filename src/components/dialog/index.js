import { memo, useEffect, useMemo } from 'react';
import './index.less';

const Dialog = memo(({ children, color = 'white', className = '' }) => {
	useEffect(() => {}, []);

	const dialogClassName = useMemo(() => {
		const classes = ['flex w-full flex-col items-center justify-center rounded-2xl border-4 py-10'];
		if (color === 'white') {
			classes.push('border-white');
		} else if (color === 'primary') {
			classes.push('border-primary');
		} else {
			classes.push('border-secondary');
		}
		if (className) classes.push(className);

		return classes.join(' ');
	}, [color, className]);

	const containerClassName = useMemo(() => {
		const classes = ['Dialog'];
		if (className) classes.push(className);
		return classes.join(' ');
	}, [className]);

	return (
		<div className={containerClassName}>
			<div className={dialogClassName}>{children}</div>
		</div>
	);
});
export default Dialog;
