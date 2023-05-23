import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { EyeCloseDuration, PSYCHOLOGICAL_STEPS, PsychologicalTestContext } from './config';
import './opening.less';

const Eyelid = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (steps === PSYCHOLOGICAL_STEPS.openEye) {
			setStyle({ opacity: 1 }, { duration: 5000, easing: Bezier.easeInSine });
		} else if (steps === PSYCHOLOGICAL_STEPS.closeEye) {
			setStyle({ opacity: 0 }, 0);
		}
	}, [steps]);
	return <div style={style} />;
};

const Eye = () => {
	const ref = useRef();
	const [state, setState] = useContext(PsychologicalTestContext);
	const { preload, steps } = state;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (preload) {
			setStyle({ opacity: 1 }, { delay: 500, duration: 2000 });
		}
	}, [preload]);

	useEffect(() => {
		if (steps === PSYCHOLOGICAL_STEPS.closeEye) {
			ref.current.style.backgroundPositionY = '-100%';
			setTimeout(() => {
				setState((S) => ({ ...S, steps: PSYCHOLOGICAL_STEPS.eyeFadeOut }));
			}, EyeCloseDuration);
		} else if (steps === PSYCHOLOGICAL_STEPS.eyeFadeOut) {
			setStyle(
				{ opacity: 0 },
				{
					delay: 0,
					duration: 500,
					onComplete: () => {
						setState((S) => ({ ...S, steps: PSYCHOLOGICAL_STEPS.question }));
					},
				},
			);
		}
	}, [steps]);

	return (
		<div ref={ref} style={style} className='eye'>
			<Eyelid steps={steps} />
		</div>
	);
};

const Opening = memo(() => (
	<div className='Opening'>
		<Eye />
	</div>
));
export default Opening;
