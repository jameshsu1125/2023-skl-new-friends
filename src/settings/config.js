import { createContext } from 'react';
import { ACTION, LOADING_PROCESS_STATE, MATCH, MODAL_STATE, PAGE } from './constant';

export const Context = createContext();

export const initialState = {
	[ACTION.page]: PAGE.landing,
	[ACTION.LoadingProcess]: LOADING_PROCESS_STATE,
	[ACTION.match]: MATCH,
	[ACTION.modal]: MODAL_STATE,
};

export const reducer = (state, action) => {
	if (action.state instanceof Object) {
		let stateStorage = {};
		Object.entries(action.state)
			.map((actionState) => {
				const value = Object.values(ACTION).filter((actionValue) => actionValue === actionState[0]);
				if (value.length > 0) return actionState;
				if (action.type) return [action.type, Object.fromEntries([actionState])];
				return undefined;
			})
			.filter((actionState) => actionState !== undefined)
			.forEach((actionState) => {
				const [key, value] = actionState;
				const prevValue = stateStorage[key];
				if (prevValue) stateStorage = { [key]: { ...prevValue, ...value } };
				else stateStorage = { [key]: { ...state[key], ...value } };
			});
		return { ...state, ...stateStorage };
	}
	if (action.type) return { ...state, [action.type]: action.state };
	return state;
};

export const Sections = [
	'home',
	'column',
	'test',
	'match',
	'school',
	'lectures',
	'join',
	'activities',
	'bannerA',
	'bannerB',
	'contact',
	// 'footer',
];

export const SchoolURL =
	'https://www.meijimama.com.tw/Course/Index/5?Title=%E6%96%B0%E6%89%8B%E5%AA%BD%E5%92%AA%E5%85%88%E4%BF%AE%E7%8F%AD';
export const AllianceURL = 'https://linebc.skl.com.tw/Tag/Bind/BC?LineUrl=Customer/Register';
export const ContactURL = 'https://sc.skl.com.tw/s/xNZ2W';
export const ContactTel = '0800-031-115';
export const openMatchHash = 'constellationMatch';
export const BannerAUrl = 'https://freeliving-uat.canlead.com.tw/event/sklife/skrewards/index.aspx';
export const BannerBUrl =
	'https://www.skfh.com.tw/find-your-way/?utm_source=sklnf&utm_medium=campaignsite&utm_campaign=findyourway';

export const LecturesInformation = [
	{
		body: '發燒降溫、挑副食品與配方奶、幼兒園腸病毒……各種常見幼兒問題不想繼續手忙腳亂，讓小兒科醫師親自告訴你!',
		url: 'https://www.skl.com.tw/',
	},
	{
		body: '看似甚麼都有了的人生，其實跟多數人一樣會充滿各種生活阻礙，用溫暖的前輩身分分享個人故事，談如何渡過人生挫折與解決困難。',
		url: 'https://www.skl.com.tw/',
	},
	{
		body: '回到家已經筋疲力盡，同時兼顧工作與家庭並非易事，正向教養專家陪你建立正向心態，並發覺孩子沒說出的行為秘密!',
		url: 'https://www.skl.com.tw/',
	},
	{
		body: '好想創業的你，嚮往創業的自由卻又不敢踏出那一步?獵人頭CEO從千份履歷中看出女性的迷惘與不自信，手把手帶領你找到方法重拾自己的光芒與底氣!',
		url: 'https://www.skl.com.tw/',
	},
];
