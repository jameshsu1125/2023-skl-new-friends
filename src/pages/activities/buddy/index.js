/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useEffect, useState } from 'react';
import Dialog from '../../../components/dialog';
import './index.less';

const Buddy = memo(() => {
	const [width, setWidth] = useState(window.innerHeight);
	useEffect(() => {
		const resize = () => {
			setWidth(window.innerWidth);
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, [width]);

	return (
		<div id='buddy' className='Buddy relative'>
			<div className='grid grid-cols-none grid-rows-2 gap-2 pb-5 lg:grid-cols-2 lg:grid-rows-none xl:py-5'>
				<div className='z-10 h-full w-full py-5 xl:pr-5'>
					<Dialog color='pink'>
						<div className='headline'>
							<div className='relative'>月月抽</div>
						</div>
						<div className='p-10 text-center text-2xl tracking-widest'>
							新朋友於活動期間內以要、被保⼈身份投保壽險/活⼒平安新契約並經承保完成，即可獲得當⽉至活動結束期間之每月
							<br />
							<span>1個抽獎序號</span>。
						</div>
					</Dialog>
				</div>
				<div className='z-10 h-full w-full py-5 xl:pl-5'>
					<Dialog color='pink' className='h-full'>
						<div className='headline'>
							<div className='relative'>再購抽</div>
						</div>
						<div className='p-10 text-center text-2xl tracking-widest'>
							活動期間內成為新朋友並再購壽險新契約且經承保完成，每1新契約可獲得當⽉
							<br />
							<span>10個抽獎序號</span>。
						</div>
					</Dialog>
				</div>
			</div>
			<div className='relative z-10 w-full px-5 text-center text-xl xl:text-sm'>
				*新朋友定義：
				{width >= 1280 ? '' : <br />}
				成交新契約當下未持有新光⼈壽有效契約者。
				<br />
				*僅計入承保完成當⽉之抽獎序號。
				<br />
				*投保商品請依自身適況及需求評估，並詳閱新光人壽網站之相關保單內容。
			</div>
		</div>
	);
});
export default Buddy;
