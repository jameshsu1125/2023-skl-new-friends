/* eslint-disable jsx-a11y/control-has-associated-label */
import { memo, useEffect } from 'react';
import { WidgetURL } from '../../settings/config';
import Container from '../container';
import './index.less';

const Widget = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Widget pointer-events-none z-20'>
			<Container background={false}>
				<div className='relative flex h-20 w-full items-center justify-end xl:h-16'>
					<button
						className='ico pointer-events-auto mr-8 drop-shadow-lg'
						type='button'
						onClick={() => {
							window.open(WidgetURL);
						}}
					/>
				</div>
			</Container>
		</div>
	);
});
export default Widget;
