import { createContext } from 'react';
import { ACTION, LOADING_PROCESS_STATE, MATCH, PAGE } from './constant';

export const Context = createContext();

export const initialState = {
	[ACTION.page]: PAGE.landing,
	[ACTION.LoadingProcess]: LOADING_PROCESS_STATE,
	[ACTION.match]: MATCH,
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
	'contact',
	// 'footer',
];

export const SchoolURL = 'https://www.skl.com.tw/';
export const LecturesURL = 'https://www.skl.com.tw/';
export const AllianceURL = 'https://www.skl.com.tw/';
export const ContactURL = 'https://sc.skl.com.tw/s/xNZ2W';
export const ContactTel = '0800-031-115';
export const openMatchHash = 'constellationMatch';
