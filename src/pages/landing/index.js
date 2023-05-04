import { memo, useState } from 'react';
import { LandingContext, LandingSteps } from './config';
import Container from '../../components/container';

const Landing = memo(({ children }) => {
	const value = useState(LandingSteps);
	return (
		<LandingContext.Provider value={value}>
			<Container>
				<div className='Landing'>{children}</div>
			</Container>
		</LandingContext.Provider>
	);
});
export default Landing;
