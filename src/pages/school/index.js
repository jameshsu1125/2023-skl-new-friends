import { memo, useEffect } from 'react';
import './index.less';
import Block from '../../components/block';
import RegularButton from '../../components/regularButton';
import { SchoolURL } from '../../settings/config';

const School = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='School flex h-full w-full justify-center'>
			<Block>
				<div className='flex w-full flex-col items-center justify-center space-y-8'>
					<div className='headline' />
					<div className='image' />
					<RegularButton
						onClick={() => {
							window.open(SchoolURL);
						}}
					>
						了解更多
					</RegularButton>
				</div>
			</Block>
		</div>
	);
});
export default School;
