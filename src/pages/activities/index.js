import { memo } from 'react';
import Block from '../../components/block';
import Alliance from './alliance';
import Buddy from './buddy';
import './index.less';
import Stake from './stake';

const Activities = memo(() => (
	<Block>
		<div className='space-y-20'>
			<Alliance />
			<Buddy />
			<Stake />
		</div>
	</Block>
));
export default Activities;
