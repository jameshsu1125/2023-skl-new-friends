import { Suspense, lazy, memo, useMemo, useState } from 'react';
import Container from '../../components/container';
import Section from '../../components/section';
import { Sections } from '../../settings/config';
import { LandingContext, LandingSteps } from './config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Widget from '../../components/widget';

const Landing = memo(({ children }) => {
	const value = useState(LandingSteps);
	const Pages = useMemo(() => {
		const pages = Sections.map((target) => {
			const Element = lazy(() => import(`../${target}/`));
			if (Element) {
				return (
					<Suspense fallback='' key={target}>
						<Section>
							<Element />
						</Section>
					</Suspense>
				);
			}
			return '';
		});
		return pages;
	}, []);

	return (
		<LandingContext.Provider value={value}>
			<Container>
				{children}
				{Pages}
				<Widget />
			</Container>
		</LandingContext.Provider>
	);
});
export default Landing;
