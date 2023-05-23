import { memo, useContext, useMemo } from 'react';
import { Context } from '../../settings/config';
import { ACTION, ConstellationGroups, MATCH_TARGET } from '../../settings/constant';
import './index.less';
import { MatchCopies } from '../../settings/match';
import HrefButton from '../hrefButton';

const ConstellationDescription = memo(() => {
	const [context] = useContext(Context);
	const { target, mommyGroupIndex, mommyConstIndex, babyGroupIndex, babyConstIndex } =
		context[ACTION.match];

	const { text, list, href } = useMemo(() => {
		if (target === MATCH_TARGET.mommy) {
			const mamaConstellation = ConstellationGroups[mommyGroupIndex].list[mommyConstIndex].name;
			const result = MatchCopies[mamaConstellation];
			return { text: [result.text], list: result.list, href: result.href };
		}
		const wuXing = ConstellationGroups[babyGroupIndex].name;
		const mamaConstellation = ConstellationGroups[mommyGroupIndex].list[mommyConstIndex].name;
		const constellation = ConstellationGroups[babyGroupIndex].list[babyConstIndex].name;

		return {
			text: [
				MatchCopies[mamaConstellation].wuXing[wuXing],
				MatchCopies[mamaConstellation].children[constellation],
			],
			list: [],
			href: [],
		};
	}, [target, mommyGroupIndex, mommyConstIndex, babyGroupIndex, babyConstIndex]);

	console.log(href);

	return (
		<div className='h-auto w-full space-y-4 pb-5 text-base xl:h-[32rem] xl:pb-0'>
			{text.map((e) => (
				<p key={e}>{e}</p>
			))}
			{href.length && (
				<ul className='ConstellationDescriptionList'>
					{list.map((item) => (
						<li key={JSON.stringify(item)}>
							<b>{item.headline}</b>
							<br />
							{item.body}
						</li>
					))}
				</ul>
			)}
			{href.length && (
				<div className='flex w-full flex-row items-center justify-start'>
					<b className='mr-5'>保險建議</b>
					{href.map((item) => (
						<HrefButton
							key={JSON.stringify(item)}
							onClick={() => {
								window.open(item.url);
							}}
						>
							{item.label}
						</HrefButton>
					))}
				</div>
			)}
		</div>
	);
});
export default ConstellationDescription;
