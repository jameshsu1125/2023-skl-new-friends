import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import { ACTION, MATCH, MATCH_TARGET } from '../../settings/constant';
import Container from '../container';
import ExitButton from '../exitButton';
import NextPrevArrow from './arrow';
import ConstellationButtons from './buttons';
import ConstellationDescription from './description';
import ConstellationGroup from './group';
import './index.less';
import ConstellationSelector from './selector';
import ConstellationTitle from './title';

const ConstellationMatches = memo(() => {
	const [context, setContext] = useContext(Context);
	const { target } = context[ACTION.match];

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		const [App] = [...document.getElementsByClassName('App')];
		const [mainContainer] = [...App.children];
		mainContainer.style.display = 'none';

		setContext({ type: ACTION.LoadingProcess, state: { enabled: true } });
		return () => {
			document.body.style.overflow = 'visible';
			mainContainer.removeAttribute('style');
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
			<div className='ConstellationMatches fixed left-0 top-0 z-10 flex h-full w-full justify-center overflow-scroll'>
				<Container scrollable>
					<div className='relative flex w-full justify-center bg-white'>
						<div className='absolute left-0 top-0 h-full w-full overflow-hidden'>
							<div className='center'>
								<div
									className='symbols'
									style={{
										transform: `translateX(${target === MATCH_TARGET.mommy ? '0px' : '-1110px'})`,
									}}
								/>
							</div>
						</div>
						<div className='relative flex min-h-screen w-full flex-col items-center justify-center pb-20 xl:flex-row-reverse'>
							<div className='w-full px-36 xl:pl-0 xl:pr-28'>
								<div className='dialog mt-8 flex w-full flex-col items-center justify-center space-y-14 rounded-3xl py-5'>
									<div className='text-center text-3xl font-medium tracking-widest'>
										<div className='-my-2 font-semibold text-primary'>
											STEP
											{target === MATCH_TARGET.mommy ? ' 1' : ' 2'}
										</div>
										<span className='text-2xl'>
											挑選
											{target === MATCH_TARGET.mommy ? '媽咪' : '寶寶'}
											的星座
										</span>
									</div>
									<div className='flex w-full flex-row items-center justify-center space-x-6'>
										<NextPrevArrow direct='prev' />
										<ConstellationSelector />
										<NextPrevArrow direct='next' />
									</div>
									<ConstellationGroup />
								</div>
							</div>
							<div className='flex w-full flex-col justify-center space-y-6 px-28 py-5 text-xl xl:pl-28 xl:pr-16'>
								{/* <Steps /> */}
								<ConstellationTitle />
								<ConstellationDescription />
							</div>
						</div>
						<div className='pointer-events-none absolute bottom-10 w-full px-28'>
							<ConstellationButtons />
						</div>
						<div className='absolute top-10 flex w-full justify-end px-5 xl:px-28'>
							<ExitButton
								onClick={() => {
									window.history.back();
									setContext({ type: ACTION.match, state: { ...MATCH } });
								}}
							/>
						</div>
					</div>
				</Container>
			</div>
		</OnloadProvider>
	);
});
export default ConstellationMatches;
