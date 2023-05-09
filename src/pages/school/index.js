import { memo, useEffect } from 'react';
import './index.less';
import Block from '../../components/block';
import RegularButton from '../../components/regularButton';

const School = memo(() => {
	useEffect(() => {}, []);
	return (
		<Block>
			<div className='School flex w-full flex-col items-center justify-center'>
				<div className='headline' />
				<div className='image' />
				<RegularButton>了解更多</RegularButton>
			</div>
		</Block>
	);
});
export default School;
