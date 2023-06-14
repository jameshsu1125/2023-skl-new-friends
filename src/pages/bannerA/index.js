import { memo, useEffect } from 'react';
import './index.less';
import Block from '../../components/block';
import RegularButton from '../../components/regularButton';
import { BannerAUrl } from '../../settings/config';

const BannerA = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='BannerA my-5 flex h-full w-full justify-center'>
			<Block>
				<div className='flex w-full flex-col items-center justify-center space-y-8'>
					<div className='image' />
					<RegularButton
						onClick={() => {
							window.open(BannerAUrl);
						}}
					>
						了解更多
					</RegularButton>
				</div>
			</Block>
		</div>
	);
});
export default BannerA;
