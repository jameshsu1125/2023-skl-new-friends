import { memo, useEffect } from 'react';
import './index.less';

const RegularButton = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<button
			className='RegularButton flex flex-row items-center justify-center rounded-l-full rounded-r-full border-4 border-tertiary px-5 py-2 text-2xl tracking-widest xl:text-base'
			type='button'
		>
			{children}
			<svg
				width='24'
				height='25'
				viewBox='0 0 24 25'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='ml-2 '
			>
				<path
					d='M12 16.5L16 12.5L12 8.5L10.6 9.9L12.2 11.5H8V13.5H12.2L10.6 15.1L12 16.5ZM12 22.5C10.6167 22.5 9.31667 22.2373 8.1 21.712C6.88333 21.1867 5.825 20.4743 4.925 19.575C4.025 18.675 3.31267 17.6167 2.788 16.4C2.26333 15.1833 2.00067 13.8833 2 12.5C2 11.1167 2.26267 9.81667 2.788 8.6C3.31333 7.38333 4.02567 6.325 4.925 5.425C5.825 4.525 6.88333 3.81267 8.1 3.288C9.31667 2.76333 10.6167 2.50067 12 2.5C13.3833 2.5 14.6833 2.76267 15.9 3.288C17.1167 3.81333 18.175 4.52567 19.075 5.425C19.975 6.325 20.6877 7.38333 21.213 8.6C21.7383 9.81667 22.0007 11.1167 22 12.5C22 13.8833 21.7373 15.1833 21.212 16.4C20.6867 17.6167 19.9743 18.675 19.075 19.575C18.175 20.475 17.1167 21.1877 15.9 21.713C14.6833 22.2383 13.3833 22.5007 12 22.5Z'
					fill='#FFA79D'
				/>
			</svg>
		</button>
	);
});
export default RegularButton;
