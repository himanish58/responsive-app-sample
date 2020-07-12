import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Registration.scss';

const Registration = (props) => {
	return (
		<div className="registration">
			<h2>Registration</h2>
			<label htmlFor="name">Name</label>
			<input type="text" name="registration" id="name" />
			<label htmlFor="name">Email</label>
			<input type="text" name="registration" id="email" />
			<label htmlFor="name">Password</label>
			<input type="password" name="registration" id="password" />
			<div className="buttons-block">
				<button className="cancel">Cancel</button>
				<button className="submit">Submit</button>
			</div>
		</div>
	);
};

Registration.propTypes = {};

export default Registration;
