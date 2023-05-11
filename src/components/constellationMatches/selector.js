import { memo, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION, ConstellationGroups } from '../../settings/constant';

const ConstellationSelector = memo(() => {
	const [context] = useContext(Context);
	const { index } = context[ACTION.match];

	const name = useMemo(() => `${ConstellationGroups[index].name}象星座`, [index]);
	const color = useMemo(() => ConstellationGroups[index].color, [index]);
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
