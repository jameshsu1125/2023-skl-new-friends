import { memo, useEffect } from 'react';
import './index.less';

const Block = memo(({ children }) => {
	useEffect(() => {}, []);
	return <div className='Block w-full p-5 xl:w-10/12'>{children}</div>;
});
export default Block;
