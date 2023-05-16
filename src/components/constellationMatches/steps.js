import { memo, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION, MATCH_TARGET } from '../../settings/constant';
import './index.less';

const Steps = memo(() => {
	const [context] = useContext(Context);
	const { target } = context[ACTION.match];

	const className = useMemo(() => {
		const classes = ['flex h-8 w-8 items-center justify-center rounded-full text-white'];
		if (target === MATCH_TARGET.baby) classes.push('bg-primary');
		else classes.push('bg-gray');
		return classes.join(' ');
	}, [target]);

	return (
		<div className='Steps flex w-full flex-row items-center justify-start text-base'>
			<div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white'>
				1
			</div>
			<div className='h-[1px] w-8 bg-primary' />
			<div className={className}>2</div>
		</div>
	);
});
export default Steps;
