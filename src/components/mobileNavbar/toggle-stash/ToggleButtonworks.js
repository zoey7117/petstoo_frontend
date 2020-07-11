import React from 'react';
import './ToggleButton.css';
import './MobileNavbar';

const ToggleButton = (props) => (
	<button className="toggle" onClick={props.click}>
		<div className="toggle-button line1" />
		<div className="toggle-button line2" />
		<div className="toggle-button line3" />
	</button>
);

export default ToggleButton;
