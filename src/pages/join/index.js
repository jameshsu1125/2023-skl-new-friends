import { memo, useEffect, useMemo } from 'react';
import './index.less';
import Block from '../../components/block';
import PrimaryButton from '../../components/primaryButton';
import Dialog from '../../components/dialog';

const ButtonInner = ({ title, description, color = 0 }) => {
	const className = useMemo(() => {
		const classes = ['text-2xl font-black tracking-widest'];
		if (color) classes.push('text-primary');
		else classes.push('text-secondary');
		return classes.join(' ');
	}, [color]);

	return (
		<div className='flex w-full flex-col'>
			<div className={className}>{title}</div>
			<span className='text-lg font-normal tracking-wider'>{description}</span>
		</div>
	);
};

const Join = memo(() => {
	useEffect(() => {}, []);

	return (
		<Block>
			<div className='Join'>
				<Dialog>
					<div className='flex w-full flex-col items-center justify-center space-y-4'>
						<div className='header' />
						<div className='flex w-full justify-center'>
							<div className='flex flex-row items-center justify-center'>
								<div className='p-3'>
									<PrimaryButton>
										<ButtonInner title='同盟之樂' description='加會員拿50點' />
									</PrimaryButton>
								</div>
								<div className='p-3'>
									<PrimaryButton color='red'>
										<ButtonInner title='酒肉之樂' description='吃喝玩樂月月抽' color='red' />
									</PrimaryButton>
								</div>
							</div>
						</div>
					</div>
				</Dialog>
			</div>
		</Block>
	);
});

export default Join;
