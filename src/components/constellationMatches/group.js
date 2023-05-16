import { memo, useCallback, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import './index.less';
import { ACTION, ConstellationGroups, MATCH_TARGET } from '../../settings/constant';

const ConstellationGroup = memo(() => {
	const [context, setContext] = useContext(Context);
	const { target, mommyGroupIndex, babyGroupIndex, mommyConstIndex, babyConstIndex } =
		context[ACTION.match];

	const { data, index, itemIndex } = useMemo(() => {
		let idx = 0;
		let itemIdx = 0;
		if (target === MATCH_TARGET.mommy) {
			idx = mommyGroupIndex;
			itemIdx = mommyConstIndex;
		} else {
			idx = babyGroupIndex;
			itemIdx = babyConstIndex;
		}

		return { data: ConstellationGroups[idx].list, index: idx, itemIndex: itemIdx };
	}, [babyGroupIndex, mommyGroupIndex, mommyConstIndex, babyConstIndex, target]);

	const onClick = useCallback(
		(i) => {
			if (i !== itemIndex) {
				if (target === MATCH_TARGET.mommy) {
					setContext({ type: ACTION.match, state: { mommyConstIndex: i } });
				} else {
					setContext({ type: ACTION.match, state: { babyConstIndex: i } });
				}
			}
		},
		[target, itemIndex, setContext],
	);

	return (
		<div className='ConstellationGroup flex w-full flex-row items-center justify-center space-x-16'>
			{data.map((item, i) => (
				<div key={JSON.stringify(item)} className='flex flex-col space-y-6'>
					<div
						className={`${item.class}${itemIndex === i ? ` active active${index * 3 + i}` : ''}`}
						onClick={() => onClick(i)}
						role='none'
					/>
					<div className='w-full text-center'>{`${item.name}座`}</div>
				</div>
			))}
		</div>
	);
});
export default ConstellationGroup;
