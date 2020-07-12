import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import '../styles/Header.scss';

const Header = (props) => {
	return (
		<header className="header">
			<img
				src="https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_1280.png"
				alt="logo"
				className="logo"
			/>
			<TextInput />
		</header>
	);
};

Header.propTypes = {};

export default Header;
