import React from 'react';
import Input from './Input';
import '../styles/Header.scss';

const Header = (props) => {
	return (
		<header className="header">
			<img
				src="https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_1280.png"
				alt="logo"
				className="logo"
			/>
			<Input
				type="text"
				label="Search"
				placeholder="Search..."
				isSearchBar={true}
			/>
		</header>
	);
};

export default Header;
