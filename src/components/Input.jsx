import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Input.scss';

const Input = ({ label, type, placeholder, isSearchBar }) => {
	return (
		<>
			{!isSearchBar && <label htmlFor={label}>{label}</label>}
			<input
				type={type}
				id={label}
				placeholder={placeholder || ''}
				className={isSearchBar ? 'search-bar' : 'registration-input'}
			/>
		</>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	isSearchBar: PropTypes.bool,
};

export default Input;
