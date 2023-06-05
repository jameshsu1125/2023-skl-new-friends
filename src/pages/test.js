import Facebook from 'lesca-facebook-share';
import { lazy, memo, Suspense, useContext, useEffect, useMemo, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import LoadingProcess from '../components/loadingProcess';
import { Context, initialState, reducer } from '../settings/config';
import { ACTION } from '../settings/constant';
import '../settings/global.less';

Facebook.install(process.env.FB_ID);

const Pages = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];

	const Page = useMemo(() => {
		const Element = lazy(() => import('../components/psychologicalTest'));
		return (
			<Suspense fallback=''>
				<Element />
			</Suspense>
		);
	}, [page]);

	return Page;
});

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
	useEffect(() => {
		window.location.hash = '';
	}, []);
	return (
		<div className='App'>
			<Context.Provider {...{ value }}>
				<Pages />
				{state[ACTION.LoadingProcess].enabled && <LoadingProcess />}
			</Context.Provider>
		</div>
	);
};

createRoot(document.getElementById('app')).render(<App />);
