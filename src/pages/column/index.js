import { memo, useEffect } from 'react';
import './index.less';

const Column = memo(() => {
	useEffect(() => {}, []);
	return <div className='Column'>Column</div>;
});
export default Column;
