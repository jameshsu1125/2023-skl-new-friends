import { createContext } from 'react';

export const PsychologicalTestContext = createContext();

export const PSYCHOLOGICAL_STEPS = {
	unset: 0,
	openEye: 1,
	closeEye: 2,
	eyeFadeOut: 3,
	question: 4,
	ugc: 5,
	result: 6,
};

export const PsychologicalTestState = {
	preload: false,
	steps: PSYCHOLOGICAL_STEPS.result,
	questionIndex: 0,
	userAnswers: [1, 1, 1, 1, 1],
	userName: 'James',
};

export const EyeCloseDuration = 3000;

export const Questions = [
	{
		question: '當你在談戀愛時，會考慮哪些戀愛門檻和速配標準？',
		answers: [
			'你和對方的心靈契合度',
			'考慮對方的家庭環境和人格特質',
			'考慮對方對感情的穩定性和兩人相處距離',
			'考慮彼此生活習慣和價值觀的相似度',
			'會思考雙方的經濟穩定和彼此未來規劃',
		],
	},
	{
		question: '如果你是最近一期樂透得主，會選擇做什麼？',
		answers: [
			'立刻辭職，跟喜歡的對象結婚',
			'把獎金跟父母家人一起分享',
			'拿著獎金，安排一年的時間環遊世界',
			'把錢拿去買股票、買基金、買房子、買珠寶投資理財',
			'把獎金拿去做一次完整的身體檢查，並且做公益活動',
		],
	},
	{
		question: '如果要裝潢屬於自己的單身套房，最關注的是什麼？',
		answers: [
			'最在意套房的空間配置和布局，是否有足夠收納',
			'最在意這間套房將來是否可以增值獲利',
			'最在意睡覺的床組和床架是否足夠舒適',
			'最在意套房的家具材質、顏色搭配和照明設計',
			'最在意這個社區是否對寵物有足夠的友善空間',
		],
	},
	{
		question: '當你與另外一半有結婚共識時，會首先考慮什麼？',
		answers: [
			'對方的家人是否喜歡我、接受我',
			'關心彼此財產分配，是否要簽婚前協議',
			'未來是否與我的父母或對方父母同住',
			'將來結婚要選擇中式婚禮還是西式婚禮',
			'將來要生小孩，或不生小孩，或討論生幾個小孩',
		],
	},
	{
		question: '結婚之後，最希望實現的願望是什麼？',
		answers: [
			'家庭和婚姻關係的和諧',
			'健康和身體狀況的良好',
			'希望雙方在事業與經濟上穩定發展',
			'旅行和探索世界的機會',
			'子女的健康成長和教育',
		],
	},
];

export const TestResults = [
	{
		title: (
			<svg
				width='232'
				height='38'
				viewBox='0 0 232 38'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.12 8.2H39V12.76H19.12V8.2ZM30 0.079998H34.92V31.68C34.92 34.52 34.32 35.88 32.64 36.64C31 37.44 28.36 37.64 24.76 37.6C24.56 36.2 23.8 33.96 23.08 32.56C25.6 32.64 28.12 32.64 28.96 32.64C29.72 32.64 30 32.4 30 31.64V0.079998ZM19.44 17.64L23.4 15.76C25.48 18.6 27.56 22.36 28.28 24.96L23.96 27.12C23.32 24.6 21.4 20.64 19.44 17.64ZM1.8 8.28H17.96V12.84H1.8V8.28ZM8 0.0399985H12.64V37.6H8V0.0399985ZM7.8 11.36L10.84 12.44C9.36 19 6.52 26.72 3.12 30.84C2.64 29.44 1.48 27.44 0.68 26.2C3.8 22.68 6.6 16.56 7.8 11.36ZM12.48 14.96C13.68 16.08 17.72 20.84 18.6 21.96L15.68 25.96C14.44 23.56 11.52 19.32 10.04 17.32L12.48 14.96ZM66.16 14.2H71.08C71.64 23.8 76.12 32.4 79.6 32.4C80.56 32.36 80.96 30.68 81.2 26.68C82.28 27.64 84.08 28.6 85.36 29C84.68 35.68 82.96 37.12 79.32 37.12C72.32 37.16 66.92 26.44 66.16 14.2ZM55.04 19.44H84.48V23.92H55.04V19.44ZM54.92 1.88H81.64V14.92H54.92V10.48H76.76V6.28H54.92V1.88ZM52.44 37.84L52.08 33.72L54.24 32.12L67.36 29.16C67.4 30.48 67.64 32.6 67.88 33.68C55.68 36.68 53.68 37.12 52.44 37.84ZM52.44 37.84C52.08 36.6 51.04 34.52 50.28 33.56C51.2 33.04 52.36 31.92 52.36 30.12V1.88H57.4V33.4C57.4 33.4 52.44 36 52.44 37.84ZM99.56 1.48H117.84V5.64H99.56V1.48ZM98.2 9.88H118.76V14.08H98.2V9.88ZM97.84 31.88H134.04V36.32H97.84V31.88ZM101.88 24.32H130.04V28.64H101.88V24.32ZM110.52 3.08H115V21.8H110.52V3.08ZM113.48 21.16H118.44V35.16H113.48V21.16ZM120.44 2.36H124.8V15.92H120.44V2.36ZM127.76 0.52H132.32V17.64C132.32 19.88 131.92 21 130.4 21.68C128.92 22.36 126.88 22.44 124.08 22.44C123.88 21.2 123.24 19.4 122.6 18.2C124.44 18.28 126.4 18.28 127 18.24C127.56 18.24 127.76 18.08 127.76 17.56V0.52ZM102.76 3.16H107.16V10.28C107.16 14.68 106.04 19.88 100.48 22.88C99.88 22 98.24 20.2 97.36 19.56C102.24 17.04 102.76 13.44 102.76 10.16V3.16ZM160.84 0.079998H166.32C166.08 8.36 165.84 27.68 149.12 37.52C148.24 36.24 146.68 34.72 145.12 33.64C161.4 24.88 160.64 6.92 160.84 0.079998ZM165.88 4.96C166.2 8.2 167.48 26.2 183.08 33.16C181.64 34.28 180.28 35.92 179.56 37.28C163.16 29.48 161.84 9.48 161.24 5.48L165.88 4.96ZM214.44 4.28H224.96V8.36H214.44V4.28ZM210.28 22.6H227.76V37.48H223.12V26.64H214.72V37.6H210.28V22.6ZM212.08 32.12H225.64V36.24H212.08V32.12ZM214.88 -9.53674e-07L219.44 1.28C217.24 6.76 213.56 12.04 209.88 15.32C209.08 14.48 207.24 12.8 206.2 12.08C209.84 9.28 213.08 4.72 214.88 -9.53674e-07ZM223.72 4.28H224.56L225.36 4.12L228.4 5.48C225.08 15.72 217.28 22.2 208.2 25.6C207.64 24.44 206.44 22.64 205.52 21.72C213.8 19.16 221.16 13.04 223.72 5.04V4.28ZM214.6 7.04C217.16 12.4 222.92 18.32 231.4 20.68C230.44 21.6 229.08 23.48 228.44 24.68C219.8 21.6 213.88 15 211.04 8.88L214.6 7.04ZM193.76 8.28H208.08V12.76H193.76V8.28ZM199.08 0.0399985H203.6V37.6H199.08V0.0399985ZM198.96 11.36L201.72 12.32C200.52 18.76 198.04 26.44 195.04 30.56C194.64 29.24 193.56 27.36 192.8 26.2C195.52 22.72 197.96 16.48 198.96 11.36ZM203.44 13.52C204.36 14.4 207.64 18.36 208.36 19.32L205.76 22.92C204.8 20.96 202.44 17.16 201.28 15.52L203.44 13.52Z'
					fill='url(#paint0_linear_189_900)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_189_900'
						x1='70.0594'
						y1='51.7453'
						x2='81.6265'
						y2='-33.7653'
						gradientUnits='userSpaceOnUse'
					>
						<stop offset='0.211122' stopColor='#E1C24C' />
						<stop offset='0.572134' stopColor='#FDF67E' />
						<stop offset='1' stopColor='white' stopOpacity='0.51' />
					</linearGradient>
				</defs>
			</svg>
		),
		sub: '村民在遊戲中並無技能，他們平靜的聆聽他人說明，並從中做出判斷，通常採取保守的態度不會輕易倒戈。',
		list: [
			'喜歡努力工作，勤奮積極，在職場中並不是最耀眼醒目的那個人。【村民型人格】者認得在職場中安分守紀，不亂出風頭，低調謙遜的人，才是值得信賴的。',
			'相較於一見鍾情的戲劇性，【村民型人格】者，更適合日久生情，謹慎對待彼此，需要時間來深入了解對方，不會輕易地表達自己的情感。',
			'【村民型人格】者通常會比較關注風險，積極考慮購買保險等風險管理產品。',
		],
		href: [
			{ name: '防癌險', url: '#' },
			{ name: '還本型醫療險', url: '#' },
		],
		description: '【村民型人格】者在性格上最突出的優勢則是踏實、穩重，做事有計劃，不輕易冒險。',
	},
	{
		title: (
			<svg
				width='232'
				height='39'
				viewBox='0 0 232 39'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.08 5.24H36.2V23.28H19.08V19.16H31.56V9.36H19.08V5.24ZM19.44 12.12H33.6V16.12H19.44V12.12ZM27.8 21.52C29.72 26.96 33.72 31.68 39.04 33.88C38 34.76 36.56 36.56 35.88 37.8C30.08 34.92 26.08 29.44 23.72 22.68L27.8 21.52ZM35.2 23.6L38.24 26.76C36.12 28.4 33.28 30.12 31.2 31.2L28.6 28.24C30.56 27.16 33.48 25.12 35.2 23.6ZM22.92 1.88L27.16 0.719998C28.04 2.4 29.04 4.68 29.48 6.12L24.96 7.44C24.64 6 23.76 3.64 22.92 1.88ZM16.44 38.76L15.92 34.76L17.68 33.32L26.52 30.8C26.6 32.08 26.84 33.88 27.04 34.84C18.88 37.44 17.36 38.08 16.44 38.76ZM16.44 38.76C16 37.76 14.72 36 13.96 35.28C14.92 34.56 16.28 33.08 16.28 30.92V5.2H21.04V33.52C21.04 33.52 16.44 37 16.44 38.76ZM1.32 4.28L4.68 1.76C12.44 8.08 13.48 15.32 13.48 23.08C13.48 28.64 13 34.04 11.16 36.48C10.56 37.28 9.68 37.84 8.64 38.08C7.08 38.44 5.36 38.48 3.48 38.4C3.44 36.88 3 35.2 2.2 33.84C4.16 34 5.6 33.96 6.44 33.88C7.04 33.8 7.4 33.6 7.72 33.16C8.56 32 8.92 27.84 8.92 22.92C8.92 15.64 7.8 9.68 1.32 4.28ZM9.4 16.2L12.92 18.32C10.96 22.2 7.24 26.8 4 29.4C3.24 28.28 1.92 26.72 0.8 25.84C4 23.84 7.64 19.76 9.4 16.2ZM10.96 1.88L15.2 4C12.4 8.96 8.32 13.72 4.16 16.92C3.4 15.96 1.88 14.52 0.84 13.76C4.88 10.92 8.72 6.2 10.96 1.88ZM64.84 1.08H70.32C70.08 9.36 69.84 28.68 53.12 38.52C52.24 37.24 50.68 35.72 49.12 34.64C65.4 25.88 64.64 7.92 64.84 1.08ZM69.88 5.96C70.2 9.2 71.48 27.2 87.08 34.16C85.64 35.28 84.28 36.92 83.56 38.28C67.16 30.48 65.84 10.48 65.24 6.48L69.88 5.96ZM99.56 2.48H117.84V6.64H99.56V2.48ZM98.2 10.88H118.76V15.08H98.2V10.88ZM97.84 32.88H134.04V37.32H97.84V32.88ZM101.88 25.32H130.04V29.64H101.88V25.32ZM110.52 4.08H115V22.8H110.52V4.08ZM113.48 22.16H118.44V36.16H113.48V22.16ZM120.44 3.36H124.8V16.92H120.44V3.36ZM127.76 1.52H132.32V18.64C132.32 20.88 131.92 22 130.4 22.68C128.92 23.36 126.88 23.44 124.08 23.44C123.88 22.2 123.24 20.4 122.6 19.2C124.44 19.28 126.4 19.28 127 19.24C127.56 19.24 127.76 19.08 127.76 18.56V1.52ZM102.76 4.16H107.16V11.28C107.16 15.68 106.04 20.88 100.48 23.88C99.88 23 98.24 21.2 97.36 20.56C102.24 18.04 102.76 14.44 102.76 11.16V4.16ZM160.84 1.08H166.32C166.08 9.36 165.84 28.68 149.12 38.52C148.24 37.24 146.68 35.72 145.12 34.64C161.4 25.88 160.64 7.92 160.84 1.08ZM165.88 5.96C166.2 9.2 167.48 27.2 183.08 34.16C181.64 35.28 180.28 36.92 179.56 38.28C163.16 30.48 161.84 10.48 161.24 6.48L165.88 5.96ZM214.44 5.28H224.96V9.36H214.44V5.28ZM210.28 23.6H227.76V38.48H223.12V27.64H214.72V38.6H210.28V23.6ZM212.08 33.12H225.64V37.24H212.08V33.12ZM214.88 0.999999L219.44 2.28C217.24 7.76 213.56 13.04 209.88 16.32C209.08 15.48 207.24 13.8 206.2 13.08C209.84 10.28 213.08 5.72 214.88 0.999999ZM223.72 5.28H224.56L225.36 5.12L228.4 6.48C225.08 16.72 217.28 23.2 208.2 26.6C207.64 25.44 206.44 23.64 205.52 22.72C213.8 20.16 221.16 14.04 223.72 6.04V5.28ZM214.6 8.04C217.16 13.4 222.92 19.32 231.4 21.68C230.44 22.6 229.08 24.48 228.44 25.68C219.8 22.6 213.88 16 211.04 9.88L214.6 8.04ZM193.76 9.28H208.08V13.76H193.76V9.28ZM199.08 1.04H203.6V38.6H199.08V1.04ZM198.96 12.36L201.72 13.32C200.52 19.76 198.04 27.44 195.04 31.56C194.64 30.24 193.56 28.36 192.8 27.2C195.52 23.72 197.96 17.48 198.96 12.36ZM203.44 14.52C204.36 15.4 207.64 19.36 208.36 20.32L205.76 23.92C204.8 21.96 202.44 18.16 201.28 16.52L203.44 14.52Z'
					fill='url(#paint0_linear_172_591)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_172_591'
						x1='70.0594'
						y1='52.7453'
						x2='81.6265'
						y2='-32.7653'
						gradientUnits='userSpaceOnUse'
					>
						<stop offset='0.211122' stopColor='#E1C24C' />
						<stop offset='0.572134' stopColor='#FDF67E' />
						<stop offset='1' stopColor='white' stopOpacity='0.51' />
					</linearGradient>
				</defs>
			</svg>
		),
		sub: '狼人在遊戲中可以操控他人存活，人的一生在實現夢想過程中，就像一場狼人殺遊戲，可能贏得比賽，也可能輸掉全局。',
		list: [
			'【狼人型人格】者，喜歡擔任領導者的角色或者獨立工作者，他們有著很強的自信和決策能力。',
			'【狼人型人格】者， 喜歡擔任領導者的角色或者獨立工作者，他們有著很強的自信和決策能力。',
			'【狼人型人格】者較少關注風險和安全問題，對於財富控管教淡泊，而更著重於享受當下的生活方式。',
		],
		href: [
			{ name: '傷害醫療險', url: '#' },
			{ name: '重大疾病險', url: '#' },
		],
		description:
			'【狼人型人格】的優勢通常是自信、果斷和獨立，以自己為出發點，結局的輸贏通常不是特別在意，他們更著重遊戲過程，活在當下。',
	},
	{
		title: (
			<svg
				width='231'
				height='39'
				viewBox='0 0 231 39'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M1.16 9.92H36.96V15.12H1.16V9.92ZM27.4 5.96L32.52 7.16C29.28 26.96 21.8 34.72 3.36 38.4C2.84 37 1.64 34.96 0.48 33.72C18 30.8 24.52 24.16 27.4 5.96ZM5.08 24.52C8.52 18.4 12.56 8.68 14.56 0.799999L19.76 1.52C17.8 9.64 13.88 19.12 11.12 24.92L5.08 24.52ZM5.08 24.52L8.28 20.6C18.76 24.68 30.24 30.24 36.76 34.08L33 38.64C26.64 34.56 15.72 28.76 5.08 24.52ZM49.96 3.68H84.16V8.32H49.96V3.68ZM48.88 32.12H85.16V36.88H48.88V32.12ZM64.36 5.76H69.36V34.68H64.36V5.76ZM55.48 9.96L60.28 10.6C59 19 56.36 26.04 51.8 30.44C51.08 29.52 49.24 27.72 48.2 26.96C52.36 23.32 54.56 17.12 55.48 9.96ZM54.96 19.84L57.56 16.44C59.96 18.64 63.04 21.8 64.36 23.92L61.56 27.84C60.28 25.6 57.32 22.24 54.96 19.84ZM75.08 10.08L79.88 10.8C78.56 18.6 75.96 25.24 71.76 29.4C71 28.52 69.04 26.84 68 26.12C71.88 22.64 74.12 16.8 75.08 10.08ZM74 19.2L77.12 16.08C80 19.04 83.8 23.12 85.44 25.84L82.08 29.48C80.52 26.68 76.88 22.36 74 19.2ZM98.56 2.48H116.84V6.64H98.56V2.48ZM97.2 10.88H117.76V15.08H97.2V10.88ZM96.84 32.88H133.04V37.32H96.84V32.88ZM100.88 25.32H129.04V29.64H100.88V25.32ZM109.52 4.08H114V22.8H109.52V4.08ZM112.48 22.16H117.44V36.16H112.48V22.16ZM119.44 3.36H123.8V16.92H119.44V3.36ZM126.76 1.52H131.32V18.64C131.32 20.88 130.92 22 129.4 22.68C127.92 23.36 125.88 23.44 123.08 23.44C122.88 22.2 122.24 20.4 121.6 19.2C123.44 19.28 125.4 19.28 126 19.24C126.56 19.24 126.76 19.08 126.76 18.56V1.52ZM101.76 4.16H106.16V11.28C106.16 15.68 105.04 20.88 99.48 23.88C98.88 23 97.24 21.2 96.36 20.56C101.24 18.04 101.76 14.44 101.76 11.16V4.16ZM159.84 1.08H165.32C165.08 9.36 164.84 28.68 148.12 38.52C147.24 37.24 145.68 35.72 144.12 34.64C160.4 25.88 159.64 7.92 159.84 1.08ZM164.88 5.96C165.2 9.2 166.48 27.2 182.08 34.16C180.64 35.28 179.28 36.92 178.56 38.28C162.16 30.48 160.84 10.48 160.24 6.48L164.88 5.96ZM213.44 5.28H223.96V9.36H213.44V5.28ZM209.28 23.6H226.76V38.48H222.12V27.64H213.72V38.6H209.28V23.6ZM211.08 33.12H224.64V37.24H211.08V33.12ZM213.88 0.999999L218.44 2.28C216.24 7.76 212.56 13.04 208.88 16.32C208.08 15.48 206.24 13.8 205.2 13.08C208.84 10.28 212.08 5.72 213.88 0.999999ZM222.72 5.28H223.56L224.36 5.12L227.4 6.48C224.08 16.72 216.28 23.2 207.2 26.6C206.64 25.44 205.44 23.64 204.52 22.72C212.8 20.16 220.16 14.04 222.72 6.04V5.28ZM213.6 8.04C216.16 13.4 221.92 19.32 230.4 21.68C229.44 22.6 228.08 24.48 227.44 25.68C218.8 22.6 212.88 16 210.04 9.88L213.6 8.04ZM192.76 9.28H207.08V13.76H192.76V9.28ZM198.08 1.04H202.6V38.6H198.08V1.04ZM197.96 12.36L200.72 13.32C199.52 19.76 197.04 27.44 194.04 31.56C193.64 30.24 192.56 28.36 191.8 27.2C194.52 23.72 196.96 17.48 197.96 12.36ZM202.44 14.52C203.36 15.4 206.64 19.36 207.36 20.32L204.76 23.92C203.8 21.96 201.44 18.16 200.28 16.52L202.44 14.52Z'
					fill='url(#paint0_linear_189_893)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_189_893'
						x1='69.0594'
						y1='52.7453'
						x2='80.6265'
						y2='-32.7653'
						gradientUnits='userSpaceOnUse'
					>
						<stop offset='0.211122' stopColor='#E1C24C' />
						<stop offset='0.572134' stopColor='#FDF67E' />
						<stop offset='1' stopColor='white' stopOpacity='0.51' />
					</linearGradient>
				</defs>
			</svg>
		),
		sub: '女巫是狼人殺中的特殊角色之一，她具有治療和毒死玩家的能力。鎖定目標後就會下定決心，且不回頭。',
		list: [
			'【女巫型人格】者，是一個謹慎而有頭腦的人，因為她們需要智慧和策略來使用她的能力。',
			'【女巫型人格】者，是一個非常獨立和自主的人，因為她需要有自己的思想和決策來保護自己與村莊。',
			'【女巫型人格】者有謹慎的特質，他們會在關鍵時刻發動能力，消弭危險，保護善良的人，因為她知道保護自己和村莊的重要性。',
		],
		href: [
			{ name: '實支實付險', url: '#' },
			{ name: '終身壽險（定期給付型）', url: '#' },
		],
		description:
			'【女巫型人格】者，在性格上最突出的優勢可能是她的智慧和策略，以及她為保護村莊而付出的勇氣和責任感。',
	},
	{
		title: (
			<svg
				width='231'
				height='38'
				viewBox='0 0 231 38'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M0.44 2.52L3.4 0.439998C9.64 6.96 10.44 13.88 10.44 21.68C10.44 27.24 10.08 33.08 8.48 35.36C7.96 36.08 7.16 36.56 6.24 36.76C5.04 37.04 3.52 37.08 1.92 37C1.88 35.68 1.52 34.2 0.8 33C2.36 33.12 3.56 33.12 4.28 33.04C4.8 33 5.12 32.84 5.4 32.44C6.2 31.32 6.48 26.48 6.48 21.6C6.48 14.24 5.68 8.2 0.44 2.52ZM6.44 15.6L9.48 17.36C7.84 21.16 4.88 25.52 2.04 28.12C1.68 27 0.76 25.08 0.04 24.12C2.48 22.32 5.12 18.8 6.44 15.6ZM8 0.479998L11.2 2.4C9.24 6.88 5.64 12 2.24 15C1.8 13.84 0.84 11.84 0.12 10.84C3.16 8.64 6.4 4.32 8 0.479998ZM15.96 12.36V18.44H30.48V12.36H15.96ZM11.8 9.44H34.8V21.32H11.8V9.44ZM15.6 0.199999L19.92 1.28C18.56 2.68 17.2 3.88 15.96 4.96C17.6 6.2 19.28 7.64 20.24 8.76L16.24 10.08C15.16 8.68 13.2 6.8 10.92 5C12.72 3.4 14.52 1.56 15.6 0.199999ZM23.36 0.199999L27.68 1.28C26.28 2.64 24.92 3.76 23.64 4.8C25.32 5.96 27.08 7.36 28.08 8.44L24.12 9.8C23 8.44 20.88 6.6 18.56 4.88C20.4 3.32 22.28 1.52 23.36 0.199999ZM31.48 0.079998L35.76 1.24C34.28 2.56 32.8 3.76 31.44 4.84C33.28 6 35.2 7.44 36.32 8.52L32.36 9.96C31.12 8.56 28.76 6.68 26.24 4.88C28.2 3.28 30.24 1.4 31.48 0.079998ZM30 22.08H33.8C33.68 28.48 34.16 33.24 34.8 33.24C35.08 33.24 35.36 32.24 35.48 30.4C36.08 31.12 37.28 31.96 37.96 32.32C37.32 36.36 36.04 37.6 34.84 37.6C31.32 37.6 30.08 30.56 30 22.08ZM14.48 23.44H20.6V26.52H14.48V23.44ZM14.52 28H20.64V31.04H14.52V28ZM12.08 37.64L11.8 34.48L13.32 33.24L20 31.84C20.08 32.88 20.28 34.32 20.48 35.12C14 36.72 12.8 37.2 12.08 37.64ZM12.08 37.64C11.92 36.64 11.44 34.84 10.88 33.96C11.6 33.72 12.2 33.4 12.2 32.08V22.04H16.16V35.2C16.16 35.2 12.08 36.48 12.08 37.64ZM23.96 23.64H29.28V26.72H23.96V23.64ZM23.92 28.2H29.24V31.28H23.92V28.2ZM21.48 37.68L21.24 34.52L22.8 33.28L29.92 31.8C30 32.84 30.2 34.28 30.4 35.08C23.48 36.76 22.24 37.2 21.48 37.68ZM21.48 37.68C21.36 36.72 20.84 34.92 20.36 34.08C21 33.84 21.6 33.56 21.6 32.2V22H25.4V35.32C25.4 35.32 21.48 36.56 21.48 37.68ZM22.8 12.16L26.16 12.96C24.64 15.44 21.6 17.36 18.72 18.6C18.12 17.96 16.76 16.92 15.88 16.44C18.84 15.48 21.52 14 22.8 12.16ZM22.32 15.84L24.12 13.64C26.12 14.28 29 15.32 30.52 16.04L28.68 18.44C27.24 17.76 24.4 16.6 22.32 15.84ZM63.84 0.079998H69.32C69.08 8.36 68.84 27.68 52.12 37.52C51.24 36.24 49.68 34.72 48.12 33.64C64.4 24.88 63.64 6.92 63.84 0.079998ZM68.88 4.96C69.2 8.2 70.48 26.2 86.08 33.16C84.64 34.28 83.28 35.92 82.56 37.28C66.16 29.48 64.84 9.48 64.24 5.48L68.88 4.96ZM98.56 1.48H116.84V5.64H98.56V1.48ZM97.2 9.88H117.76V14.08H97.2V9.88ZM96.84 31.88H133.04V36.32H96.84V31.88ZM100.88 24.32H129.04V28.64H100.88V24.32ZM109.52 3.08H114V21.8H109.52V3.08ZM112.48 21.16H117.44V35.16H112.48V21.16ZM119.44 2.36H123.8V15.92H119.44V2.36ZM126.76 0.52H131.32V17.64C131.32 19.88 130.92 21 129.4 21.68C127.92 22.36 125.88 22.44 123.08 22.44C122.88 21.2 122.24 19.4 121.6 18.2C123.44 18.28 125.4 18.28 126 18.24C126.56 18.24 126.76 18.08 126.76 17.56V0.52ZM101.76 3.16H106.16V10.28C106.16 14.68 105.04 19.88 99.48 22.88C98.88 22 97.24 20.2 96.36 19.56C101.24 17.04 101.76 13.44 101.76 10.16V3.16ZM159.84 0.079998H165.32C165.08 8.36 164.84 27.68 148.12 37.52C147.24 36.24 145.68 34.72 144.12 33.64C160.4 24.88 159.64 6.92 159.84 0.079998ZM164.88 4.96C165.2 8.2 166.48 26.2 182.08 33.16C180.64 34.28 179.28 35.92 178.56 37.28C162.16 29.48 160.84 9.48 160.24 5.48L164.88 4.96ZM213.44 4.28H223.96V8.36H213.44V4.28ZM209.28 22.6H226.76V37.48H222.12V26.64H213.72V37.6H209.28V22.6ZM211.08 32.12H224.64V36.24H211.08V32.12ZM213.88 -9.53674e-07L218.44 1.28C216.24 6.76 212.56 12.04 208.88 15.32C208.08 14.48 206.24 12.8 205.2 12.08C208.84 9.28 212.08 4.72 213.88 -9.53674e-07ZM222.72 4.28H223.56L224.36 4.12L227.4 5.48C224.08 15.72 216.28 22.2 207.2 25.6C206.64 24.44 205.44 22.64 204.52 21.72C212.8 19.16 220.16 13.04 222.72 5.04V4.28ZM213.6 7.04C216.16 12.4 221.92 18.32 230.4 20.68C229.44 21.6 228.08 23.48 227.44 24.68C218.8 21.6 212.88 15 210.04 8.88L213.6 7.04ZM192.76 8.28H207.08V12.76H192.76V8.28ZM198.08 0.0399985H202.6V37.6H198.08V0.0399985ZM197.96 11.36L200.72 12.32C199.52 18.76 197.04 26.44 194.04 30.56C193.64 29.24 192.56 27.36 191.8 26.2C194.52 22.72 196.96 16.48 197.96 11.36ZM202.44 13.52C203.36 14.4 206.64 18.36 207.36 19.32L204.76 22.92C203.8 20.96 201.44 17.16 200.28 15.52L202.44 13.52Z'
					fill='url(#paint0_linear_189_959)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_189_959'
						x1='69.0594'
						y1='51.7453'
						x2='80.6265'
						y2='-33.7653'
						gradientUnits='userSpaceOnUse'
					>
						<stop offset='0.211122' stopColor='#E1C24C' />
						<stop offset='0.572134' stopColor='#FDF67E' />
						<stop offset='1' stopColor='white' stopOpacity='0.51' />
					</linearGradient>
				</defs>
			</svg>
		),
		sub: '村民在遊戲中並無技能，他們平靜的聆聽他人說明，並從中做出判斷，通常採取保守的態度不會輕易倒戈。',
		list: [
			'【獵人型人格】者是一個有著堅定信仰的人，會為自己的信仰、夢想奮鬥。',
			'【獵人型人格】者是一個浪漫的人，會對伴侶忠誠，並且會為了保護他們而勇敢地行動。',
			'【獵人型人格】者通常不會特別在意金錢，而是更關注自己的道德觀、價值觀。具有完整的風險意識，會做好準備應對可能的挑戰。',
		],
		href: [
			{ name: '長照險', url: '#' },
			{ name: '美元利變終身還本壽險', url: '#' },
		],
		description:
			'【獵人型人格】的優勢是勇敢、忠誠和正義感，在面對困難時能堅持信仰，保護自己和重要的人。父母、伴侶和子女是他們最想保護與守護的。',
	},
	{
		title: (
			<svg
				width='279'
				height='39'
				viewBox='0 0 279 39'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M0.96 2.72H13.72V6.88H0.96V2.72ZM0.04 15.6H15.24V19.84H0.04V15.6ZM6 17.92H10.6V33.48C10.6 35.68 10.24 36.96 8.72 37.68C7.28 38.44 5.28 38.52 2.56 38.52C2.4 37.16 1.76 35.2 1.12 33.92C2.84 33.96 4.72 33.96 5.28 33.96C5.84 33.96 6 33.84 6 33.36V17.92ZM12.28 2.72H13.28L14.16 2.48L17.08 4.56C15.12 7.72 12.28 11.36 9.72 13.64C9.08 12.8 7.84 11.48 7.04 10.8C9.04 8.92 11.28 5.72 12.28 3.6V2.72ZM13.84 15.6H14.44L15.08 15.44L18.04 16.12C17.2 19.48 16.08 23.24 15.2 25.64L11.64 24.84C12.36 22.68 13.28 19.08 13.84 16.16V15.6ZM1.68 11.4L4.08 8.24C7.36 9.76 11.6 12.2 13.64 14.12L11.04 17.68C9.12 15.68 5 13.04 1.68 11.4ZM16.88 2.6H37.36V6.64H16.88V2.6ZM22.64 18.64V21.2H31.56V18.64H22.64ZM22.64 24.48V27.04H31.56V24.48H22.64ZM22.64 12.84V15.36H31.56V12.84H22.64ZM18.24 9.32H36.16V30.56H18.24V9.32ZM24.68 4.8L30.16 5.4C29.4 7.92 28.56 10.44 27.88 12.16L23.72 11.4C24.12 9.48 24.56 6.76 24.68 4.8ZM22.16 30.6L26.08 33.16C23.88 35.28 20.08 37.52 16.96 38.72C16.2 37.84 14.8 36.4 13.76 35.6C16.88 34.48 20.4 32.32 22.16 30.6ZM27.96 33.28L31.52 30.88C33.76 32.32 36.8 34.52 38.36 36.04L34.6 38.72C33.2 37.24 30.24 34.88 27.96 33.28ZM57.12 33.24H77.2V37.2H57.12V33.24ZM54.4 19.08H79.92V22.88H54.4V19.08ZM54.4 12.84H79.92V16.6H54.4V12.84ZM48.84 6.44H85.28V10.52H48.84V6.44ZM53.92 25.6H80.36V38.44H75.44V29.6H58.64V38.56H53.92V25.6ZM62.72 2L67.52 0.799999C68.92 2.6 70.44 5 71.04 6.68L65.92 8C65.44 6.4 64.04 3.88 62.72 2ZM97.76 4.2H132.4V13.32H127.48V8.56H102.44V13.32H97.76V4.2ZM103.64 10.76H126.2V14.84H103.64V10.76ZM110.08 17.72L113.76 15.72C121.68 22.16 121.44 33.68 117.84 36.72C116.44 38.12 115.16 38.56 113.08 38.56C112.2 38.6 111 38.56 109.84 38.52C109.76 37.2 109.36 35.32 108.52 34C109.96 34.16 111.24 34.2 112.16 34.2C113.12 34.2 113.76 34.04 114.32 33.24C116.2 31.44 116.48 23.04 110.08 17.72ZM114.36 12.16L118.32 13.8C114.08 18.12 106.8 21.2 100.12 23C99.68 22.08 98.44 20.16 97.68 19.24C104.04 17.96 110.88 15.52 114.36 12.16ZM112.72 19.84L115.76 22.12C111.88 24.96 104.92 28.08 99.72 29.72C99.2 28.64 98.2 27.04 97.36 26.04C102.48 24.92 109.36 22.28 112.72 19.84ZM115.08 24.44L118.4 26.92C113.92 30.88 105.8 34.88 99.28 36.92C98.72 35.72 97.72 34 96.8 32.92C103.28 31.48 111.2 27.92 115.08 24.44ZM124.68 22.16C126.24 26.96 129.44 31.04 134.12 32.96C133.08 33.84 131.64 35.64 131 36.88C125.68 34.32 122.36 29.4 120.44 23.12L124.68 22.16ZM125.96 15.48L129.92 18.64C126.32 21.44 121.8 24.48 118.32 26.32L115.2 23.56C118.64 21.56 123.2 18.2 125.96 15.48ZM111.32 2.04L116.4 0.599999C117.24 2.08 118.2 4.08 118.52 5.44L113.16 7.08C112.88 5.72 112.12 3.6 111.32 2.04ZM146.56 2.48H164.84V6.64H146.56V2.48ZM145.2 10.88H165.76V15.08H145.2V10.88ZM144.84 32.88H181.04V37.32H144.84V32.88ZM148.88 25.32H177.04V29.64H148.88V25.32ZM157.52 4.08H162V22.8H157.52V4.08ZM160.48 22.16H165.44V36.16H160.48V22.16ZM167.44 3.36H171.8V16.92H167.44V3.36ZM174.76 1.52H179.32V18.64C179.32 20.88 178.92 22 177.4 22.68C175.92 23.36 173.88 23.44 171.08 23.44C170.88 22.2 170.24 20.4 169.6 19.2C171.44 19.28 173.4 19.28 174 19.24C174.56 19.24 174.76 19.08 174.76 18.56V1.52ZM149.76 4.16H154.16V11.28C154.16 15.68 153.04 20.88 147.48 23.88C146.88 23 145.24 21.2 144.36 20.56C149.24 18.04 149.76 14.44 149.76 11.16V4.16ZM207.84 1.08H213.32C213.08 9.36 212.84 28.68 196.12 38.52C195.24 37.24 193.68 35.72 192.12 34.64C208.4 25.88 207.64 7.92 207.84 1.08ZM212.88 5.96C213.2 9.2 214.48 27.2 230.08 34.16C228.64 35.28 227.28 36.92 226.56 38.28C210.16 30.48 208.84 10.48 208.24 6.48L212.88 5.96ZM261.44 5.28H271.96V9.36H261.44V5.28ZM257.28 23.6H274.76V38.48H270.12V27.64H261.72V38.6H257.28V23.6ZM259.08 33.12H272.64V37.24H259.08V33.12ZM261.88 0.999999L266.44 2.28C264.24 7.76 260.56 13.04 256.88 16.32C256.08 15.48 254.24 13.8 253.2 13.08C256.84 10.28 260.08 5.72 261.88 0.999999ZM270.72 5.28H271.56L272.36 5.12L275.4 6.48C272.08 16.72 264.28 23.2 255.2 26.6C254.64 25.44 253.44 23.64 252.52 22.72C260.8 20.16 268.16 14.04 270.72 6.04V5.28ZM261.6 8.04C264.16 13.4 269.92 19.32 278.4 21.68C277.44 22.6 276.08 24.48 275.44 25.68C266.8 22.6 260.88 16 258.04 9.88L261.6 8.04ZM240.76 9.28H255.08V13.76H240.76V9.28ZM246.08 1.04H250.6V38.6H246.08V1.04ZM245.96 12.36L248.72 13.32C247.52 19.76 245.04 27.44 242.04 31.56C241.64 30.24 240.56 28.36 239.8 27.2C242.52 23.72 244.96 17.48 245.96 12.36ZM250.44 14.52C251.36 15.4 254.64 19.36 255.36 20.32L252.76 23.92C251.8 21.96 249.44 18.16 248.28 16.52L250.44 14.52Z'
					fill='url(#paint0_linear_189_1017)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_189_1017'
						x1='83.5545'
						y1='52.7453'
						x2='93.1929'
						y2='-33.2497'
						gradientUnits='userSpaceOnUse'
					>
						<stop offset='0.211122' stopColor='#E1C24C' />
						<stop offset='0.572134' stopColor='#FDF67E' />
						<stop offset='1' stopColor='white' stopOpacity='0.51' />
					</linearGradient>
				</defs>
			</svg>
		),
		sub: '預言家是狼人殺中的關鍵角色，擁有可以查驗其他玩家真假身份的能力。就好像在遊戲中，他們想盡辦法確保自己和其他村民在狼人攻擊下生存下來。',
		list: [
			'【預言家型人格】者擅長分析情勢解讀信息。',
			'【預言家型人格】者冷靜理性，不容易被感情左右，他們會去查驗情人說過的每句話，尤其擅長拆穿謊言。',
			'【預言家型人格】者謹慎小心，在安全的前提下，會想創造更多財富和收入，以最大的限度保護自己和其他村民。',
		],
		href: [
			{ name: '定期壽險', url: '#' },
			{ name: '醫療險', url: '#' },
		],
		description:
			'【預言家型人格】者的優勢，在於保持冷靜、敏銳觀察和分析能力。他們可以從眾多的信息中找出有利線索，並做出正確決策。',
	},
];

export const TestIndexByScore = [
	{ index: 0, min: 0, max: 8 },
	{ index: 1, min: 9, max: 11 },
	{ index: 2, min: 12, max: 17 },
	{ index: 3, min: 18, max: 21 },
	{ index: 4, min: 22, max: 25 },
];
