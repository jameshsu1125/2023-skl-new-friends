import { memo, useContext, useEffect, useMemo } from 'react';
import './result.less';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import { PsychologicalTestContext, TestIndexByScore, TestResults } from './config';
import HrefButton from '../hrefButton';

const Result = memo(() => {
	const [, setContext] = useContext(Context);
	const [state] = useContext(PsychologicalTestContext);
	const { userAnswers, userName } = state;

	const listTitle = ['工作', '愛情', '財富保險'];

	const { title, sub, list, description, index, href } = useMemo(() => {
		const total = userAnswers.reduce((current, prev) => current + prev, 0);
		const [range] = TestIndexByScore.filter((e) => {
			const { min, max } = e;
			if (total >= min && total <= max) return true;
			return false;
		});
		let idx = 0;
		if (range) idx = range.index;
		return { ...TestResults[idx], index: idx };
	}, [userAnswers]);

	useEffect(() => {
		setContext({ type: ACTION.LoadingProcess, state: { enabled: false } });
	}, []);

	return (
		<div className='Result'>
			<div className='flex w-full flex-col items-start justify-center space-y-4 p-5 pr-20 text-white xl:w-4/6'>
				<div className='w-full text-2xl font-medium'>
					{`${userName ? `${userName}, ` : ''}`}
					您是
				</div>
				{title}
				<div className='text-lg'>{sub}</div>
				<ol className='w-full space-y-5 text-xl'>
					{list.map((item, idx) => (
						<li key={item}>
							{listTitle[idx]}
							<p className='text-lg'>{item}</p>
						</li>
					))}
				</ol>
				<div className='flex w-full flex-row items-center justify-start space-x-4'>
					<span>保險建議</span>
					{href.map((item) => (
						<HrefButton
							key={JSON.stringify(item)}
							onClick={() => {
								window.open(item.url);
							}}
						>
							{item.name}
						</HrefButton>
					))}
				</div>
			</div>
			<div className='flex w-full flex-col items-center pb-10 xl:w-2/6'>
				<div className={`image img${index}`} />
				<div className='dialog'>{description}</div>
			</div>
		</div>
	);
});
export default Result;
