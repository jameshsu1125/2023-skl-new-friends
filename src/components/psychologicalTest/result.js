/* eslint-disable jsx-a11y/control-has-associated-label */
import Facebook from 'lesca-facebook-share';
import Gtag from 'lesca-gtag';
import Line from 'lesca-line-share';
import QueryString from 'lesca-url-parameters';
import UserAgent from 'lesca-user-agent';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import HrefButton from '../hrefButton';
import { PsychologicalTestContext, TestIndexByScore, TestResults } from './config';
import './result.less';

const Result = memo(() => {
	const [, setContext] = useContext(Context);
	const [state] = useContext(PsychologicalTestContext);
	const { userAnswers, userName } = state;

	const [device, setDevice] = useState(UserAgent.get());

	const listTitle = ['工作', '愛情', '財富保險'];

	const { title, sub, list, description, index, href, downloadImage, currentName } = useMemo(() => {
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
		Gtag.pv(`結果-${currentName}`);
	}, [currentName]);

	useEffect(() => {
		setContext({ type: ACTION.LoadingProcess, state: { enabled: false } });
	}, []);

	useEffect(() => {
		const resize = () => {
			setDevice(UserAgent.get());
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<div className='Result'>
			<div className='flex w-full flex-col items-start justify-center space-y-4 p-5 text-white xl:w-4/6 xl:pr-20'>
				<div className='flex w-full flex-row items-center'>
					<div className='w-7/12 space-y-2 xl:w-full'>
						<div className='w-full text-2xl font-medium'>
							{`${userName ? `${userName}, ` : ''}`}
							您是
						</div>
						{title}
						<div className='text-lg'>{sub}</div>
					</div>
					<div className='flex w-5/12 scale-125 items-center justify-center xl:hidden'>
						<div className={`image img${index}`} />
					</div>
				</div>
				<div className='space-y-5 py-8'>
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
				<div className={`image hidden xl:block img${index}`} />
				<div className='min-h-[11rem] w-full p-5'>
					<div className='dialog'>{description}</div>
				</div>
				<div className='flex w-full flex-row items-center justify-start p-5 text-xl text-pink xl:justify-center'>
					分享您的測驗結果：
					<div className='mx-3 flex flex-row items-center space-x-3'>
						<button
							className='fb'
							type='button'
							onClick={() => {
								Gtag.event('結果', '臉書分享');
								setTimeout(() => {
									Facebook.share({
										href: `${QueryString.root()}const-${index}.html`,
										redirect_uri: QueryString.root(),
									});
								}, 500);
							}}
						/>

						<button
							className='line'
							type='button'
							onClick={() => {
								Gtag.event('結果', 'line分享');
								setTimeout(() => {
									Line.share(
										`${QueryString.root()}const-${index}.html`,
										'Hi~快來跟我一起測試你是那種人格吧！',
									);
								}, 500);
							}}
						/>
						{device === 'mobile' ? (
							<button
								className='download'
								type='button'
								onClick={() => {
									Gtag.event('結果', '下載');
									setContext({
										type: ACTION.modal,
										state: {
											enabled: true,
											body: <img src={downloadImage} alt='淺意識下你是哪一種人格' />,
										},
									});
								}}
							/>
						) : (
							<a href={downloadImage} download='淺意識下你是哪一種人格'>
								<div className='download cursor-pointer' />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
});
export default Result;
