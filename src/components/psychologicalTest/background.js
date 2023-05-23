import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import './background.less';
import { PSYCHOLOGICAL_STEPS, PsychologicalTestContext } from './config';

const LightUp = () => {
	const [state] = useContext(PsychologicalTestContext);
	const { steps } = state;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (steps === PSYCHOLOGICAL_STEPS.closeEye) {
			setStyle({ opacity: 1 }, 500);
		} else if (steps >= PSYCHOLOGICAL_STEPS.question) {
			setStyle({ opacity: 1 }, 0);
		}
	}, [steps]);

	return <div style={style} className='lightUp' />;
};

const DarkBackground = () => {
	const [state] = useContext(PsychologicalTestContext);
	const { preload } = state;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (preload) {
			setStyle({ opacity: 1 }, { delay: 2000, duration: 2000 });
		}
	}, [preload]);

	return <div className='dark' style={style} />;
};

const Gradient = () => {
	const [state, setState] = useContext(PsychologicalTestContext);
	const { preload, steps } = state;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (preload) {
			if (steps >= PSYCHOLOGICAL_STEPS.question) return;
			setStyle(
				{ opacity: 1 },
				{
					delay: 2000,
					duration: 5000,
					onStart: () => {
						setState((S) => ({ ...S, steps: PSYCHOLOGICAL_STEPS.openEye }));
					},
					onComplete: () => {
						setState((S) => ({ ...S, steps: PSYCHOLOGICAL_STEPS.closeEye }));
					},
				},
			);
		}
	}, [preload]);

	useEffect(() => {
		if (steps === PSYCHOLOGICAL_STEPS.closeEye) {
			setStyle({ opacity: 0 });
		}
	}, [steps]);

	return <div className='gradient' style={style} />;
};

const Background = memo(() => (
	<div className='Background h-full w-full'>
		<div className='bg' />
		<DarkBackground />
		<Gradient />
		<LightUp />
	</div>
));
export default Background;
