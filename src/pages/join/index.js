import Gtag from 'lesca-gtag';
import { memo, useEffect, useMemo } from 'react';
import Block from '../../components/block';
import Dialog from '../../components/dialog';
import PrimaryButton from '../../components/primaryButton';
import './index.less';

const ButtonInner = ({ title, description, color = 0 }) => {
	const className = useMemo(() => {
		const classes = ['text-4xl md:text-2xl font-bold tracking-widest'];
		if (color) classes.push('text-primary');
		else classes.push('text-secondary');
		return classes.join(' ');
	}, [color]);

	return (
		<div className='flex w-full flex-col space-y-2 md:space-y-1'>
			<div className={className}>{title}</div>
			<span className='text-2xl font-normal tracking-wider md:text-xl'>{description}</span>
		</div>
	);
};

const Join = memo(() => {
	useEffect(() => {}, []);

	return (
		<Block>
			<div className='Join relative z-20'>
				<Dialog>
					<div className='flex w-full flex-col items-center justify-center'>
						<div className='header' />
						<h2 className='-mt-5 mb-10 w-full text-center text-4xl tracking-widest md:text-2xl'>
							樂事即刻展開
						</h2>
						<div className='flex w-full justify-center'>
							<div className='flex flex-col items-center justify-center md:flex-row'>
								<div className='p-3'>
									<PrimaryButton
										onClick={() => {
											window.location.hash = 'alliance';
											Gtag.event('加入新光新朋友', '同盟之樂');
										}}
									>
										<ButtonInner title='同盟之樂' description='加會員拿50點' />
									</PrimaryButton>
								</div>
								<div className='p-3'>
									<PrimaryButton
										color='red'
										onClick={() => {
											window.location.hash = 'buddy';
											Gtag.event('加入新光新朋友', '酒肉之樂');
										}}
									>
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
