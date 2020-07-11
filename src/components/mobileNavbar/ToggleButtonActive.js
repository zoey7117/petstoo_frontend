import React from 'react';
import './ToggleButton.css';
import './MobileNavbar';

const ToggleButtonActive = (props) => (
	<button className="toggle" onClick={props.click}>
		<div className="topLine2" />
		<div className="middleLine2" />
		<div className="bottomLine2" />
	</button>
);

export default ToggleButtonActive;
