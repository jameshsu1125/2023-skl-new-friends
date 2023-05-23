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

const PsychologicalTest = memo(() => {
	const [, setContext] = useContext(Context);
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
					setState((S) => ({ ...S, preload: true }));
					setContext({ type: ACTION.LoadingProcess, state: { enabled: false } });
				}}
			>
				<div className='PsychologicalTest fixed left-0 top-0 z-10 flex h-full w-full justify-center bg-secondaryBackground'>
					<Background />
					{state.steps < PSYCHOLOGICAL_STEPS.question && <Opening />}
					{state.steps === PSYCHOLOGICAL_STEPS.question && <Question />}
					{state.steps === PSYCHOLOGICAL_STEPS.ugc && <UGC />}
					{state.steps === PSYCHOLOGICAL_STEPS.result && <Result />}
				</div>
			</OnloadProvider>
		</PsychologicalTestContext.Provider>
	);
});
export default PsychologicalTest;
