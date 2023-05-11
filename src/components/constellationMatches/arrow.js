import { memo, useCallback, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION, ConstellationGroups } from '../../settings/constant';

const NextPrevArrow = memo(({ direct }) => {
	const [context, setContext] = useContext(Context);
	const match = context[ACTION.match];

	const className = useMemo(() => {
		const classes = ['arrow cursor-pointer hover:scale-105'];
		if (direct === 'next') classes.push('next');
		return classes.join(' ');
	}, [direct]);

	const onClick = useCallback(() => {
		const { index } = match;
		let idx = index;
		if (direct === 'next') idx = index + 1;
		else idx = index - 1;

		if (idx > ConstellationGroups.length - 1) idx = 0;
		else if (idx < 0) idx = ConstellationGroups.length - 1;

		setContext({ type: ACTION.match, state: { index: idx } });
	}, [direct, match, setContext]);

	return <div className={className} onClick={onClick} role='none' />;
});
export default NextPrevArrow;
