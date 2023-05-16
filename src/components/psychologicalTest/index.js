import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import './index.less';
import Container from '../container';

const PsychologicalTest = memo(() => {
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
			<div className='PsychologicalTest fixed left-0 top-0 z-10 flex h-full w-full justify-center bg-secondaryBackground'>
				<Container>asdasd</Container>
			</div>
		</OnloadProvider>
	);
});
export default PsychologicalTest;
