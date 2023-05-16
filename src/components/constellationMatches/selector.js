import { memo, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION, ConstellationGroups, MATCH_TARGET } from '../../settings/constant';

const ConstellationSelector = memo(() => {
	const [context] = useContext(Context);
	const match = context[ACTION.match];
	const { target, babyGroupIndex, mommyGroupIndex } = match;

	const { name, color } = useMemo(() => {
		let idx = 0;
		if (target === MATCH_TARGET.mommy) idx = mommyGroupIndex;
		else idx = babyGroupIndex;
		return {
			name: `${ConstellationGroups[idx].name}象星座`,
			color: ConstellationGroups[idx].color,
		};
	}, [babyGroupIndex, mommyGroupIndex, target]);

	const className = useMemo(() => {
		const classes = [
			'ConstellationSelector flex flex-row items-center justify-center rounded-l-full rounded-r-full border-4 px-5 py-2 text-2xl tracking-widest xl:text-xl',
		];
		if (color === 'pink') classes.push('border-pink');
		else if (color === 'orange') classes.push('border-orange');
		else if (color === 'blue') classes.push('border-blue');
		else classes.push('border-purple');
		return classes.join(' ');
	}, [color]);

	return <div className={className}>{name}</div>;
});
export default ConstellationSelector;
