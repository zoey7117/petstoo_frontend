import React from 'react';
import PetContainer from '../../containers/PetContainer';

const Home = (props) => {
	return (
		<div className="pet-container">
			<PetContainer updateUser={props.updateUser} currentUser={props.currentUser} />
		</div>
	);
};

export default Home;
