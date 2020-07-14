import React from 'react';
import './ToggleButtonOne.css';
import './MobileNavbar';

const ToggleButtonOne = (props) => (
	<div className="nav-toggle" onClick={props.click}>
		<div className="nav-toggle-bar" />
	</div>
);

export default ToggleButtonOne;
