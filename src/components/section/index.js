import { memo, useEffect } from 'react';
import './index.less';

const Section = memo(({ children }) => {
	useEffect(() => {}, []);
	return <section className='Section flex w-full items-center justify-center'>{children}</section>;
});
export default Section;
