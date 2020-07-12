import React from 'react';
import PropTypes from 'prop-types';
import Details from './Details';
import NewsFeed from './NewsFeed';
import Registration from './Registration';
import '../styles/HomepageContainer.scss';

const HomepageContainer = (props) => {
	return (
		<div className="homepage-container">
			<Details />
			<NewsFeed />
			<Registration />
		</div>
	);
};

HomepageContainer.propTypes = {};

export default HomepageContainer;
