export const ACTION = {
	page: '頁面',
	LoadingProcess: '讀取產生中',
	match: '星座配對',
	modal: 'modal',
};

export const PAGE = {
	landing: '/landing',
};

export const LOADING_PROCESS_TYPE = [
	'balls',
	'bars',
	'bubbles',
	'cubes',
	'cylon',
	'spin',
	'spinningBubbles',
	'spokes',
];

export const LOADING_PROCESS_STATE = {
	enabled: false,
	type: LOADING_PROCESS_TYPE[1] || 'spokes',
	body: '',
};

export const MODAL_STATE = {
	enabled: false,
	body: '',
};

export const TRANSITION = {
	unset: 0,
	fadeIn: 1,
	fadeOut: 2,
	fadeInEnd: 3,
	fadeOutEnd: 4,
	loop: 5,
};

export const ConstellationGroups = [
	{
		name: '土',
		color: 'orange',
		list: [
			{ name: '魔羯', class: 'ico0' },
			{ name: '處女', class: 'ico1' },
			{ name: '金牛', class: 'ico2' },
		],
	},
	{
		name: '風',
		color: 'purple',
		list: [
			{ name: '天秤', class: 'ico3' },
			{ name: '雙子', class: 'ico4' },
			{ name: '水瓶', class: 'ico5' },
		],
	},
	{
		name: '火',
		color: 'pink',
		list: [
			{ name: '獅子', class: 'ico6' },
			{ name: '牡羊', class: 'ico7' },
			{ name: '射手', class: 'ico8' },
		],
	},
	{
		name: '水',
		color: 'blue',
		list: [
			{ name: '天蠍', class: 'ico9' },
			{ name: '巨蟹', class: 'ico10' },
			{ name: '雙魚', class: 'ico11' },
		],
	},
];

export const MATCH_TARGET = {
	mommy: 0,
	baby: 1,
};

export const MATCH = {
	enabled: false,
	target: MATCH_TARGET.mommy,
	mommyGroupIndex: 0,
	mommyConstIndex: 0,
	babyGroupIndex: 0,
	babyConstIndex: 0,
};
