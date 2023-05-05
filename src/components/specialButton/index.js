import { memo, useEffect } from 'react';
import './index.less';

const SpecialButton = memo(({ children }) => {
	useEffect(() => {}, []);
	return <div className='SpecialButton'>{children}</div>;
});
export default SpecialButton;
