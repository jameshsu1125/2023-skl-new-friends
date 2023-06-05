import { memo, useCallback, useContext, useMemo } from 'react';
import QuestionDialog from '../questionDialog';
import { PSYCHOLOGICAL_STEPS, PsychologicalTestContext, Questions } from './config';
import './question.less';
import RegularButton from './regularButton';

const Button = ({ children, index, onClick, answerIndex }) => {
	const items = ['A', 'B', 'C', 'D', 'E'];
	const className = useMemo(() => {
		const classes = ['button'];
		if (answerIndex === index + 1) classes.push('active');
		return classes.join(' ');
	}, [index, answerIndex]);
	return (
		<button className={className} onClick={() => onClick?.(index)} type='button'>
			<div className='list'>{items[index]}</div>
			{children}
		</button>
	);
};

const Question = memo(() => {
	const [state, setState] = useContext(PsychologicalTestContext);
	const { questionIndex, userAnswers } = state;
	const { question, answers } = useMemo(() => Questions[questionIndex], [questionIndex]);
	const onClick = useCallback(
		(index) => {
			if (questionIndex < Questions.length) {
				const finalAnswer = [...userAnswers];
				finalAnswer[questionIndex] = index + 1;
				if (questionIndex === Questions.length - 1) {
					setState((S) => ({ ...S, userAnswers: finalAnswer, steps: PSYCHOLOGICAL_STEPS.ugc }));
				} else {
					setState((S) => ({ ...S, questionIndex: questionIndex + 1, userAnswers: finalAnswer }));
				}
			}
		},
		[questionIndex, userAnswers],
	);

	return (
		<div className='Question'>
			<QuestionDialog>
				<div className='flex h-full w-full flex-col items-center justify-start space-y-10'>
					<div className='text-xl font-semibold tracking-wider text-white'>{question}</div>
					<div className='flex w-full flex-col items-center space-y-5 px-5'>
						{answers.map((item, index) => (
							<Button
								key={item}
								index={index}
								onClick={onClick}
								answerIndex={userAnswers[questionIndex]}
							>
								{item}
							</Button>
						))}
					</div>
				</div>
				<div className='absolute -bottom-4 left-0 flex w-full justify-center'>
					<div className='rounded-l-full rounded-r-full bg-[#F2DDC9] px-4 py-2 text-sm tracking-wide text-white'>
						{`${questionIndex + 1} / ${Questions.length}`}
					</div>
				</div>
				<div className='absolute -bottom-24 -left-0 xl:-left-40 xl:bottom-0'>
					{questionIndex > 0 && (
						<RegularButton
							prev
							onClick={() => {
								setState((S) => ({
									...S,
									questionIndex: S.questionIndex - 1,
								}));
							}}
						>
							上一步
						</RegularButton>
					)}
				</div>
			</QuestionDialog>
		</div>
	);
});
export default Question;
