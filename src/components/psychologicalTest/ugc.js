import { memo, useContext, useRef } from 'react';
import './ugc.less';
import { setMaxLength } from './useSort';
import { PSYCHOLOGICAL_STEPS, PsychologicalTestContext } from './config';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';

const UGC = memo(() => {
	const [, setContext] = useContext(Context);
	const [, setState] = useContext(PsychologicalTestContext);
	const ref = useRef();

	const onClick = () => {
		const { value } = ref.current;
		const userName = setMaxLength(value, 12);
		ref.current.value = userName;
		setState((S) => ({ ...S, userName, steps: PSYCHOLOGICAL_STEPS.result }));
		setContext({ type: ACTION.LoadingProcess, state: { enabled: true } });
	};

	return (
		<div className='UGC'>
			<div className='dialog'>
				<div className='pt-10 text-2xl font-medium tracking-widest text-white'>
					只差一步取得你的專屬測驗！
				</div>
				<div className='flex w-full justify-center px-14'>
					<input ref={ref} placeholder='輸入您的暱稱（4-6字）' maxLength={12} />
				</div>
				<div className='flex w-full justify-center pt-10'>
					<button type='button' onClick={onClick}>
						查看結果
					</button>
				</div>
			</div>
		</div>
	);
});
export default UGC;
