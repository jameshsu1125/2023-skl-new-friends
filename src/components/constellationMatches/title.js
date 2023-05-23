import { memo, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION, ConstellationGroups, MATCH_TARGET } from '../../settings/constant';
import './index.less';

const ConstellationTitle = memo(() => {
	const [context] = useContext(Context);
	const { target, mommyGroupIndex, mommyConstIndex, babyGroupIndex, babyConstIndex } =
		context[ACTION.match];

	const { title } = useMemo(() => {
		let idx = 0;
		let constIdx = 0;
		if (target === MATCH_TARGET.mommy) {
			idx = mommyGroupIndex;
			constIdx = mommyConstIndex;
		} else {
			idx = babyGroupIndex;
			constIdx = babyConstIndex;
		}
		const group = ConstellationGroups[idx];
		const { list } = group;
		const data = list[constIdx];
		const headline = `${data.name}座${target === MATCH_TARGET.mommy ? '媽咪' : '寶寶'}`;
		return { title: headline };
	}, [target, mommyGroupIndex, mommyConstIndex, babyGroupIndex, babyConstIndex]);
	return (
		<div className='w-full space-y-2 tracking-widest'>
			<div className='text-3xl font-bold'>{title}</div>
		</div>
	);
});
export default ConstellationTitle;
