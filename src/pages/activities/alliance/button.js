import { memo } from 'react';
import { AllianceURL } from '../../../settings/config';
import './index.less';

const AllianceButton = memo(() => (
	<div className='AllianceButtonContainer relative my-10 pb-5'>
		<button
			type='button'
			className='AllianceButton relative w-96 space-y-1 rounded-l-full rounded-r-full border-4 border-white bg-secondary py-3'
			onClick={() => {
				window.open(AllianceURL);
			}}
		>
			<div className='text-4xl font-black tracking-wider text-primary'>全新</div>
			<div className='text-xl font-black tracking-wide text-black'>註冊&綁定</div>
		</button>
	</div>
));
export default AllianceButton;
