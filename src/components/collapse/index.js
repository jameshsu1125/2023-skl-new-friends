import { memo, useState } from 'react';
import './index.less';

const Collapse = memo(({ title, children }) => {
	const [open, setOpen] = useState(false);

	return (
		<div
			className='Collapse w-full cursor-pointer overflow-hidden rounded-l-3xl rounded-r-3xl border-4 border-primary'
			style={{ maxHeight: open ? 'none' : '56px' }}
		>
			<div className='flex w-full flex-col text-center text-2xl text-primary'>
				<button
					className='title flex h-[2.9rem] w-full flex-row items-center justify-center'
					onClick={() => {
						setOpen((S) => !S);
					}}
					type='button'
				>
					{title}
					<svg
						width='40'
						height='40'
						viewBox='0 0 40 40'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='ml-3 h-8 w-8'
						style={{ transform: `rotate(${open ? '-180deg' : '0deg'})` }}
					>
						<path
							d='M20.0814 20.664C19.8647 20.664 19.6616 20.6304 19.472 20.5633C19.2824 20.4961 19.1064 20.3807 18.9439 20.2171L11.4689 12.7421C11.171 12.4442 11.015 12.0715 11.0009 11.6241C10.9868 11.1767 11.1428 10.791 11.4689 10.4671C11.7668 10.1692 12.146 10.0203 12.6064 10.0203C13.0668 10.0203 13.446 10.1692 13.7439 10.4671L20.0814 16.764L26.4189 10.4671C26.7168 10.1692 27.0895 10.0138 27.5369 10.0008C27.9843 9.98775 28.37 10.1432 28.6939 10.4671C28.9918 10.765 29.1408 11.1442 29.1408 11.6046C29.1408 12.065 28.9918 12.4442 28.6939 12.7421L21.2189 20.2171C21.0564 20.3796 20.8803 20.495 20.6907 20.5633C20.5012 20.6315 20.298 20.6651 20.0814 20.664ZM20.0814 30.414C19.8647 30.414 19.6616 30.3804 19.472 30.3133C19.2824 30.2461 19.1064 30.1307 18.9439 29.9671L11.4689 22.4921C11.171 22.1942 11.015 21.8221 11.0009 21.3758C10.9868 20.9294 11.1428 20.5432 11.4689 20.2171C11.7668 19.9192 12.146 19.7703 12.6064 19.7703C13.0668 19.7703 13.446 19.9192 13.7439 20.2171L20.0814 26.514L26.4189 20.2171C26.7168 19.9192 27.0895 19.7632 27.5369 19.7491C27.9843 19.735 28.37 19.891 28.6939 20.2171C28.9918 20.515 29.1408 20.8942 29.1408 21.3546C29.1408 21.815 28.9918 22.1942 28.6939 22.4921L21.2189 29.9671C21.0564 30.1296 20.8803 30.245 20.6907 30.3133C20.5012 30.3815 20.298 30.4151 20.0814 30.414Z'
							fill='#E60012'
						/>
					</svg>
				</button>
			</div>
			<div className='w-full px-10 pb-10' style={{ display: open ? 'block' : 'none' }}>
				{children}
			</div>
		</div>
	);
});
export default Collapse;
