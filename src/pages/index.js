import Gtag from 'lesca-gtag';
import { lazy, memo, Suspense, useContext, useEffect, useMemo, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import ConstellationMatches from '../components/constellationMatches';
import LoadingProcess from '../components/loadingProcess';
import Navigation from '../components/navigation';
import { Context, initialState, openMatchHash, reducer } from '../settings/config';
import { ACTION, PAGE } from '../settings/constant';
import '../settings/global.less';

Gtag.install(process.env.GID);

const Pages = memo(() => {
	const [context, setContext] = useContext(Context);
	const page = context[ACTION.page];

	useEffect(() => {
		window.location.hash = '';
		window.addEventListener('hashchange', () => {
			if (window.location.hash === `#${openMatchHash}`) {
				setContext({ type: ACTION.match, state: { enabled: true } });
			} else {
				setContext({ type: ACTION.match, state: { enabled: false } });
			}
		});
	}, []);

	const Page = useMemo(() => {
		const [target] = Object.values(PAGE).filter((data) => data === page);
		const Element = lazy(() => import(`.${target}/`));
		if (target) {
			return (
				<Suspense fallback=''>
					<Element>
						<Navigation />
					</Element>
				</Suspense>
			);
		}
		return '';
	}, [page]);

	return Page;
});

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);

	useEffect(() => {
		Gtag.pv('首頁');
	}, []);

	return (
		<div className='App'>
			<Context.Provider {...{ value }}>
				<Pages />
				{state[ACTION.match].enabled && <ConstellationMatches />}
				{state[ACTION.LoadingProcess].enabled && <LoadingProcess />}
			</Context.Provider>
		</div>
	);
};

createRoot(document.getElementById('app')).render(<App />);
