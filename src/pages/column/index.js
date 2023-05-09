import { memo, useEffect } from 'react';
import './index.less';

const Column = memo(() => {
	useEffect(() => {}, []);
	return <div className='Column flex h-64 w-full items-center justify-center'>Column</div>;
});
export default Column;
