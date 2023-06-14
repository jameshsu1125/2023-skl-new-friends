import Gtag from 'lesca-gtag';
import { memo, useEffect } from 'react';
import Block from '../../components/block';
import RegularButton from '../../components/regularButton';
import { SchoolURL } from '../../settings/config';
import './index.less';

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
							Gtag.event('媽媽教室', '前往報名');
						}}
					>
						前往報名
					</RegularButton>
				</div>
			</Block>
		</div>
	);
});
export default School;
