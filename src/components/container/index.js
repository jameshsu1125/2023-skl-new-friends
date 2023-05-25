import { memo, useMemo } from 'react';
import './index.less';

const Container = memo(({ children, scrollable = false }) => {
	const className = useMemo(() => {
		const classes = ['relative w-full max-w-3xl bg-secondaryBackground xl:max-w-7xl'];
		if (!scrollable) classes.push('overflow-hidden');
		else classes.push('overflow-y-visible');
		return classes.join(' ');
	}, [scrollable]);
	return (
		<div className='Container flex w-full min-w-[640px] justify-center'>
			<div className={className}>{children}</div>
		</div>
	);
});
export default Container;
