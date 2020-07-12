import React from 'react';
import PropTypes from 'prop-types';

const NewsBlock = ({ title, date, name }) => {
	return (
		<div className="news-container">
			<div className="color-block"></div>
			<div className="news-block">
				<h4>{title}</h4>
				<div className="date-name">
					<div className="date">{date}</div>
					<div className="name">{name}</div>
				</div>
			</div>
		</div>
	);
};

NewsBlock.propTypes = {
	title: PropTypes.string,
	date: PropTypes.string,
	name: PropTypes.string,
};

export default NewsBlock;
