import Gtag from 'lesca-gtag';
import { memo } from 'react';
import { AllianceURL } from '../../../settings/config';
import './index.less';

const AllianceButton = memo(() => (
	<div className='AllianceButtonContainer relative my-10 pb-5'>
		<button
			type='button'
			className='AllianceButton relative w-[480px] space-y-1 rounded-l-full rounded-r-full border-4 border-white bg-secondary py-8 xl:w-96 xl:py-3'
			onClick={() => {
				window.open(AllianceURL);
				Gtag.event('同盟之樂', '註冊&綁定');
			}}
		>
			<div className='text-6xl font-bold tracking-wider text-primary xl:text-4xl'>全新</div>
			<div className='text-4xl font-bold tracking-wide text-black xl:text-xl'>註冊&綁定</div>
		</button>
	</div>
));
export default AllianceButton;
