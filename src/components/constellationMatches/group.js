import { memo, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import './index.less';
import { ACTION, ConstellationGroups } from '../../settings/constant';

const ConstellationGroup = memo(() => {
	const [context] = useContext(Context);
	const { index } = context[ACTION.match];
	const data = useMemo(() => ConstellationGroups[index].list, [index]);

	return (
		<div className='ConstellationGroup flex w-full flex-row items-center justify-center space-x-16'>
			{data.map((item) => (
				<div key={JSON.stringify(item)} className='flex flex-col space-y-6'>
					<div className={item.class} />
					<div className='w-full text-center'>{`${item.name}座`}</div>
				</div>
			))}
		</div>
	);
});
export default ConstellationGroup;
