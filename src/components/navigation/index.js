import { memo, useEffect } from 'react';
import './index.less';

const Logo = () => {
	const onClick = () => window.location.reload();
	return <div className='logo cursor-pointer' onClick={onClick} role='none' />;
};

const Navigation = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Navigation sticky -mb-5 w-full overflow-hidden pb-5'>
			<div className='w-full bg-white p-5 drop-shadow-xl'>
				<Logo />
			</div>
		</div>
	);
});
export default Navigation;
