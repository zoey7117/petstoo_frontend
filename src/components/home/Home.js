import React from 'react';
import PetContainer from '../../containers/PetContainer';

const Home = (props) => {
	return (
		<div>
			<PetContainer updateUser={props.updateUser} currentUser={props.currentUser} />
		</div>
	);
};

export default Home;
