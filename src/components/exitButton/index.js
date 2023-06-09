import { memo, useMemo } from 'react';
import './index.less';

const ExitButton = memo(({ onClick, color = 'pink' }) => {
	const className = useMemo(() => {
		const classes = [
			'ExitButton flex flex-row items-center justify-center rounded-l-full rounded-r-full border-2 px-3 py-1 tracking-wider hover:bg-pink hover:text-white',
		];
		if (color === 'pink') classes.push('text-pink');
		else classes.push('text-white');

		return classes.join(' ');
	}, [color]);
	return (
		<button className={className} type='button' onClick={() => onClick?.()}>
			<svg
				width='16'
				height='17'
				viewBox='0 0 16 17'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='mr-2'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M6.66648 1.83328C6.6666 1.69424 6.62326 1.55865 6.5425 1.44547C6.46175 1.33229 6.34763 1.24719 6.21612 1.20208C6.08461 1.15697 5.94228 1.15411 5.80906 1.19389C5.67584 1.23367 5.55839 1.31411 5.47314 1.42394L0.806478 7.42394C0.715442 7.54097 0.666016 7.68501 0.666016 7.83328C0.666016 7.98155 0.715442 8.12558 0.806478 8.24261L5.47314 14.2426C5.55839 14.3524 5.67584 14.4329 5.80906 14.4727C5.94228 14.5125 6.08461 14.5096 6.21612 14.4645C6.34763 14.4194 6.46175 14.3343 6.5425 14.2211C6.62326 14.1079 6.6666 13.9723 6.66648 13.8333V11.1733C10.2525 11.2479 11.9751 11.9286 12.8405 12.6686C13.6631 13.3719 13.8138 14.1993 13.9705 15.0659L14.0111 15.2893C14.0411 15.4491 14.1283 15.5924 14.2566 15.6924C14.3848 15.7924 14.5451 15.842 14.7074 15.832C14.8697 15.822 15.0227 15.7531 15.1377 15.6381C15.2527 15.5232 15.3217 15.3702 15.3318 15.2079C15.4458 13.3759 15.2745 10.7213 13.9805 8.50061C12.7245 6.34528 10.4625 4.68794 6.66648 4.51461V1.83328Z'
					fill={color === 'pink' ? '#FFA79D' : '#fff'}
				/>
			</svg>
			離開
		</button>
	);
});
export default ExitButton;
