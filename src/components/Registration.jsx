import React from 'react';
import Input from './Input';
import '../styles/Registration.scss';

const Registration = (props) => {
	return (
		<div className="registration">
			<h2>Registration</h2>
			<Input type="text" label="Name" />
			<Input type="email" label="Email" />
			<Input type="password" label="Password" />
			<div className="buttons-block">
				<button className="cancel">Cancel</button>
				<button className="submit">Submit</button>
			</div>
		</div>
	);
};

export default Registration;
