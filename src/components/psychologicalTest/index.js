import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import './index.less';
import { PSYCHOLOGICAL_STEPS, PsychologicalTestContext, PsychologicalTestState } from './config';
import Opening from './opening';
import Background from './background';
import Question from './question';
import UGC from './ugc';
import Result from './result';
import ExitButton from '../exitButton';
import Modal from '../modal';

const PsychologicalTest = memo(() => {
	const [context, setContext] = useContext(Context);
	const modal = context[ACTION.modal];
	const [state, setState] = useState(PsychologicalTestState);
	const value = useMemo(() => [state, setState], [state]);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		setContext({ type: ACTION.LoadingProcess, state: { enabled: true } });
		return () => {
			document.body.style.overflow = 'visible';
		};
	}, []);

	return (
		<PsychologicalTestContext.Provider value={value}>
			<OnloadProvider
				hideBeforeLoaded={false}
				onload={() => {
					setTimeout(() => {
						setState((S) => ({ ...S, preload: true }));
						setContext({ type: ACTION.LoadingProcess, state: { enabled: false } });
					}, 1000);
				}}
			>
				<div className='PsychologicalTest fixed left-0 top-0 z-10 flex h-full w-full justify-center bg-secondaryBackground'>
					<Background />
					{state.steps < PSYCHOLOGICAL_STEPS.question && <Opening />}
					{state.steps === PSYCHOLOGICAL_STEPS.question && <Question />}
					{state.steps === PSYCHOLOGICAL_STEPS.ugc && <UGC />}
					{state.steps === PSYCHOLOGICAL_STEPS.result && <Result />}
				</div>
				<div className='absolute top-10 z-10 flex w-full justify-end px-5 xl:px-28'>
					<ExitButton
						color='white'
						onClick={() => {
							window.history.back();
							window.close();
							// setContext({ type: ACTION.match, state: { enabled: false } });
						}}
					/>
				</div>
				<div>{modal.enabled && <Modal />}</div>
			</OnloadProvider>
		</PsychologicalTestContext.Provider>
	);
});
export default PsychologicalTest;
