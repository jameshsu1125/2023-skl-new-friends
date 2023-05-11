import { memo, useEffect } from 'react';
import Container from '../container';
import NextPrevArrow from './arrow';
import ConstellationGroup from './group';
import './index.less';
import ConstellationSelector from './selector';

const ConstellationMatches = memo(() => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'visible';
		};
	}, []);
	return (
		<div className='ConstellationMatches fixed left-0 top-0 z-10 flex h-full w-full justify-center bg-secondaryBackground'>
			<Container>
				<div className='flex h-full w-full justify-center'>
					<div className='center'>
						<div className='symbols' />
					</div>
					<div className='relative flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse'>
						<div className='flex h-full w-full flex-col items-center justify-center space-y-14'>
							<h2 className='text-3xl font-medium tracking-widest'>媽咪的星座</h2>
							<div className='flex w-full flex-row items-center justify-center space-x-6'>
								<NextPrevArrow direct='prev' />
								<ConstellationSelector />
								<NextPrevArrow direct='next' />
							</div>
							<ConstellationGroup />
						</div>
						<div className='w-full'>B</div>
					</div>
				</div>
			</Container>
		</div>
	);
});
export default ConstellationMatches;
