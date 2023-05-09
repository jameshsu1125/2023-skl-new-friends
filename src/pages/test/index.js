import { memo, useEffect } from 'react';
import './index.less';

const Test = memo(() => {
	useEffect(() => {}, []);
	return <div className='Test flex h-64 w-full items-center justify-center'>test</div>;
});
export default Test;
