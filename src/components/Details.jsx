import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Details.scss';

const Details = (props) => {
	return (
		<div className="details">
			<div className="welcome">
				<h3>Welcome Lorem</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores
					architecto quo quod inventore autem suscipit voluptatem quae? Quo
					obcaecati facere reprehenderit harum iusto dolorum sunt magni
					voluptates accusamus qui consectetur, fugiat fugit exercitationem
					distinctio. Sequi veritatis dignissimos, dolor vel aliquid,
					consequatur, commodi perspiciatis tempore aut sint voluptate fugit
					dolore.
				</p>
			</div>
			<div className="about">
				<h3>About Us</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam
					iure, ad odit iusto non. Culpa in distinctio veritatis ab!
					<a href="#">View More</a>
				</p>
			</div>
		</div>
	);
};

Details.propTypes = {};

export default Details;
