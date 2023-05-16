import { memo, useCallback, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION, ConstellationGroups, MATCH_TARGET } from '../../settings/constant';

const NextPrevArrow = memo(({ direct }) => {
	const [context, setContext] = useContext(Context);
	const match = context[ACTION.match];

	const className = useMemo(() => {
		const classes = ['arrow cursor-pointer hover:scale-105'];
		if (direct === 'next') classes.push('next');
		return classes.join(' ');
	}, [direct]);

	const onClick = useCallback(() => {
		const { target, mommyGroupIndex, babyGroupIndex } = match;
		let idx = 0;
		if (target === MATCH_TARGET.mommy) idx = mommyGroupIndex;
		else idx = babyGroupIndex;

		if (direct === 'next') idx += 1;
		else idx -= 1;

		if (idx > ConstellationGroups.length - 1) idx = 0;
		else if (idx < 0) idx = ConstellationGroups.length - 1;

		if (target === MATCH_TARGET.mommy) {
			setContext({ type: ACTION.match, state: { mommyGroupIndex: idx } });
		} else setContext({ type: ACTION.match, state: { babyGroupIndex: idx } });
	}, [direct, match, setContext]);

	return <div className={className} onClick={onClick} role='none' />;
});
export default NextPrevArrow;
