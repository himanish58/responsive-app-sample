import React from 'react';
import PropTypes from 'prop-types';

const DetailBlock = ({ title, description, showViewMore }) => {
	return (
		<div className="detail-block">
			<h3 className="detail-block-title">{title}</h3>
			<div className="detail-block-description">{description}</div>
			{showViewMore && <a href="#">View More</a>}
		</div>
	);
};

DetailBlock.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	showViewMore: PropTypes.bool,
};

export default DetailBlock;
