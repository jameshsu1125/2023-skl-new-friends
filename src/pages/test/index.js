import { memo, useEffect } from 'react';
import './index.less';

const Test = memo(() => {
	useEffect(() => {}, []);
	return <div className='Test'>test</div>;
});
export default Test;
