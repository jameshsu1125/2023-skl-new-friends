import { memo, useContext } from 'react';
import { PsychologicalTestContext } from '../psychologicalTest/config';
import './index.less';

const QuestionDialog = memo(({ children }) => {
	const [state] = useContext(PsychologicalTestContext);
	const { questionIndex } = state;
	return (
		<div className='QuestionDialog'>
			<div className={`index q${questionIndex}`} />
			<div className='h-full w-full px-10 pb-10 pt-20'>{children}</div>
		</div>
	);
});
export default QuestionDialog;
