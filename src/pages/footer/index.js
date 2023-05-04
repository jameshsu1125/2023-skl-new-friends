import { memo, useEffect } from 'react';
import './index.less';

const Footer = memo(() => {
	useEffect(() => {}, []);
	return <div className='Footer w-full bg-primary p-5 text-center text-lg text-white'>Footer</div>;
});
export default Footer;
