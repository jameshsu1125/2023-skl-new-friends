import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import Container from '../container';
import NextPrevArrow from './arrow';
import ConstellationButtons from './buttons';
import ConstellationDescription from './description';
import ConstellationGroup from './group';
import './index.less';
import ConstellationSelector from './selector';
import Steps from './steps';
import ConstellationTitle from './title';
import { ACTION } from '../../settings/constant';

const ConstellationMatches = memo(() => {
	const [, setContext] = useContext(Context);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		setContext({ type: ACTION.LoadingProcess, state: { enabled: true } });
		return () => {
			document.body.style.overflow = 'visible';
		};
	}, []);

	return (
		<OnloadProvider
			hideBeforeLoaded
			onload={() => {
				setTimeout(() => {
					setContext({ type: ACTION.LoadingProcess, state: { enabled: false } });
				}, 1000);
			}}
		>
			<div className='ConstellationMatches fixed left-0 top-0 z-10 flex h-full w-full justify-center bg-secondaryBackground'>
				<Container>
					<div className='flex h-full w-full justify-center'>
						<div className='center'>
							<div className='symbols' />
						</div>
						<div className='relative flex w-full flex-col items-center justify-center xl:flex-row-reverse'>
							<div className='flex w-full flex-col items-center justify-center space-y-14 py-5'>
								<h2 className='text-3xl font-medium tracking-widest'>媽咪的星座</h2>
								<div className='flex w-full flex-row items-center justify-center space-x-6'>
									<NextPrevArrow direct='prev' />
									<ConstellationSelector />
									<NextPrevArrow direct='next' />
								</div>
								<ConstellationGroup />
							</div>
							<div className='x:py-36 flex w-full flex-col justify-center space-y-6 px-36 py-5 text-xl'>
								<Steps />
								<ConstellationTitle />
								<ConstellationDescription />
								<ConstellationButtons />
							</div>
						</div>
					</div>
				</Container>
			</div>
		</OnloadProvider>
	);
});
export default ConstellationMatches;
