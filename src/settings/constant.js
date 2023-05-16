export const ACTION = {
	page: '頁面',
	LoadingProcess: '讀取產生中',
	match: '星座配對',
	test: '心裡測試',
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
			{
				name: '摩羯',
				class: 'ico0',
				mommy:
					'摩羯座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
			{
				name: '處女',
				class: 'ico1',
				mommy:
					'處女座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
			{
				name: '金牛',
				class: 'ico2',
				mommy:
					'金牛座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
		],
	},
	{
		name: '風',
		color: 'purple',
		list: [
			{
				name: '天坪',
				class: 'ico3',
				mommy:
					'天坪座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
			{
				name: '雙子',
				class: 'ico4',
				mommy:
					'雙子座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
			{
				name: '水瓶',
				class: 'ico5',
				mommy:
					'水瓶座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
		],
	},
	{
		name: '火',
		color: 'pink',
		list: [
			{
				name: '獅子',
				class: 'ico6',
				mommy:
					'獅子座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
			{
				name: '白羊',
				class: 'ico7',
				mommy:
					'白羊座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
			{
				name: '射手',
				class: 'ico8',
				mommy:
					'射手座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
		],
	},
	{
		name: '水',
		color: 'blue',
		list: [
			{
				name: '天蠍',
				class: 'ico9',
				mommy:
					'天蠍座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
			{
				name: '巨蟹',
				class: 'ico10',
				mommy:
					'巨蟹座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
			{
				name: '雙魚',
				class: 'ico11',
				mommy:
					'雙魚座媽媽是一位活潑、開朗、好奇心強的母親，對於十二星座小孩的育兒方法，她會注重不同星座小孩的個性和需求，以及他們的脾氣、性格優點和缺點，採取適合他們的育兒方法。',
			},
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

export const TEST = {
	enabled: false,
};
