/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useContext } from 'react';
import RegularButton from '../../components/regularButton';
import { Context } from '../../settings/config';
import './index.less';
import { ACTION } from '../../settings/constant';

const Test = memo(() => {
	const [, setContext] = useContext(Context);
	return (
		<div id='test' className='Test relative flex w-full items-center justify-center'>
			<div className='center'>
				<div className='symbol' />
			</div>
			<div className='absolute top-0 h-full w-full xl:pl-[30.5%]'>
				<div className='flex h-full w-full flex-col items-center justify-center'>
					<div className='headline' />
					<div className='sub my-5' />
					<div className='w-full space-y-10 px-20 py-10 text-center text-2xl xl:space-x-0 xl:py-7 xl:text-xl xl:tracking-widest'>
						<p className='font-bold'>
							在人生的道路上，經常需面對許多抉擇，
							<br />
							邀請你一起完成這個心理測驗
						</p>
						<p className='font-normal'>
							艾菲爾老師要幫你分析，
							<br />
							在你的內心當中，
							<br />
							<span className='text-primary xl:text-[#FED27B]'>愛情、家人、夢想、財富</span>和
							<span className='text-primary xl:text-[#FED27B]'>子女</span>
							，
							<br />
							這五大人生幸福，你潛意識中的排序，哪一個先、哪一個後。
						</p>
					</div>
					<div className='flex w-full items-center justify-center pt-48 xl:pt-5'>
						<div className='scale-[1.7] xl:scale-125'>
							<RegularButton
								onClick={() => {
									setContext({ type: ACTION.test, state: { enabled: true } });
								}}
							>
								開始測試
							</RegularButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
export default Test;
