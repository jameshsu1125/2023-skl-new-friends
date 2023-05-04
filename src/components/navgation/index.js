import { memo, useEffect } from 'react';
import './index.less';

const Navigation = memo(() => {
	useEffect(() => {}, []);
	return <div className='Navigation sticky top-0 w-full bg-backgroundColor'>Navigation</div>;
});
export default Navigation;
