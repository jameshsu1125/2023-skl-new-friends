import { memo, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION, ConstellationGroups, MATCH_TARGET } from '../../settings/constant';
import './index.less';

const ConstellationDescription = memo(() => {
	const [context] = useContext(Context);
	const { target, mommyGroupIndex, mommyConstIndex, babyGroupIndex, babyConstIndex } =
		context[ACTION.match];

	const description = useMemo(() => {
		let dat = {};
		if (target === MATCH_TARGET.mommy) {
			dat = { index: mommyGroupIndex, constIndex: mommyConstIndex };
		} else dat = { index: babyGroupIndex, constIndex: babyConstIndex };

		if (target === MATCH_TARGET.mommy) {
			return ConstellationGroups[dat.index].list[dat.constIndex].mommy;
		}
		return ConstellationGroups[dat.index].list[dat.constIndex].baby;
	}, [target, mommyGroupIndex, mommyConstIndex, babyGroupIndex, babyConstIndex]);
	return <div className='h-auto w-full xl:h-96'>{description}</div>;
});
export default ConstellationDescription;
