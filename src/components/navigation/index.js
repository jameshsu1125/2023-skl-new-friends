import { memo, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import Container from '../container';
import './index.less';

const Logo = () => {
	const onClick = () => window.location.reload();
	return <div className='logo cursor-pointer' onClick={onClick} role='none' />;
};

const Navigation = memo(() => {
	const [content] = useContext(Context);
	const { enabled } = content[ACTION.match];

	const className = useMemo(() => {
		const classes = [
			'Navigation sticky left-0 top-0 z-50 -mb-5 w-full overflow-hidden pb-5 xl:fixed',
		];
		if (enabled) classes.push('hidden');
		return classes.join(' ');
	}, [enabled]);

	return (
		<div className={className}>
			<Container>
				<div className='w-full bg-white p-5 drop-shadow-xl'>
					<Logo />
				</div>
			</Container>
		</div>
	);
});
export default Navigation;
