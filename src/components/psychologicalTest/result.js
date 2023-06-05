/* eslint-disable jsx-a11y/control-has-associated-label */
import Facebook from 'lesca-facebook-share';
import Line from 'lesca-line-share';
import QueryString from 'lesca-url-parameters';
import { memo, useContext, useEffect, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import HrefButton from '../hrefButton';
import { PsychologicalTestContext, TestIndexByScore, TestResults } from './config';
import './result.less';

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
				<div className='space-y-5 py-8'>
					<div className='text-lg'>{sub}</div>
					<ol className='w-full space-y-5 text-xl'>
						{list.map((item, idx) => (
							<li key={item}>
								{listTitle[idx]}
								<p className='text-lg'>{item}</p>
							</li>
						))}
					</ol>
				</div>
				<div className='z-10 flex w-full flex-row items-center justify-start space-x-4'>
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
				<div className='h-44'>
					<div className='dialog'>{description}</div>
				</div>
				<div className='flex w-full flex-row items-center justify-center text-xl text-pink'>
					分享您的測驗結果：
					<div className='mx-3 flex flex-row items-center space-x-3'>
						<button
							className='fb'
							type='button'
							onClick={() => {
								Facebook.share({
									href: `${QueryString.root()}const-${index}.html`,
									redirect_uri: QueryString.root(),
								});
							}}
						/>
						<button
							className='line'
							type='button'
							onClick={() => {
								Line.share(`${QueryString.root()}const-${index}.html`, '');
							}}
						/>
						<button className='download' type='button' />
					</div>
				</div>
			</div>
		</div>
	);
});
export default Result;
