import React from 'react';
import PropTypes from 'prop-types';
import '../styles/NewsFeed.scss';

const NewsFeed = (props) => {
	return (
		<div className="news-feed">
			<h3>News Feed</h3>
			<div className="news-highlight">
				<div className="color-block"></div>
				<div className="news-block">
					<h4>Centralise</h4>
					<div className="date-name">
						<div className="date">Oct 27, 2019</div>
						<div className="name">Benjamin</div>
					</div>
				</div>
			</div>
			<div className="news-highlight">
				<div className="color-block"></div>
				<div className="news-block">
					<h4>Centralise</h4>
					<div className="date-name">
						<div className="date">Oct 27, 2019</div>
						<div className="name">Benjamin</div>
					</div>
				</div>
			</div>
			<div className="news-highlight">
				<div className="color-block"></div>
				<div className="news-block">
					<h4>Centralise</h4>
					<div className="date-name">
						<div className="date">Oct 27, 2019</div>
						<div className="name">Benjamin</div>
					</div>
				</div>
			</div>
		</div>
	);
};

NewsFeed.propTypes = {};

export default NewsFeed;
