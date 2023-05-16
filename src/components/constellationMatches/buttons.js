import { memo, useContext } from 'react';
import { Context } from '../../settings/config';
import { ACTION, MATCH, MATCH_TARGET } from '../../settings/constant';
import RegularButton from '../regularButton';
import './index.less';

const ConstellationButtons = memo(() => {
	const [context, setContext] = useContext(Context);
	const { target } = context[ACTION.match];

	const prev = () => {
		setContext({ type: ACTION.match, state: { target: MATCH_TARGET.mommy } });
	};
	const next = () => {
		setContext({ type: ACTION.match, state: { target: MATCH_TARGET.baby } });
	};

	const finished = () => {
		setContext({ type: ACTION.match, state: { ...MATCH, enabled: false } });
	};

	return (
		<div className='flex w-full justify-center'>
			{target === MATCH_TARGET.mommy ? (
				<RegularButton onClick={next} invert>
					下一步
				</RegularButton>
			) : (
				<div className='flex flex-row space-x-6'>
					<RegularButton prev onClick={prev}>
						上一步
					</RegularButton>
					<RegularButton invert hideIcon onClick={finished}>
						完成
					</RegularButton>
				</div>
			)}
		</div>
	);
});
export default ConstellationButtons;
