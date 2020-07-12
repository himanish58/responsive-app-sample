import React from 'react';
import PropTypes from 'prop-types';
import NewsBlock from './NewsBlock';
import '../styles/NewsFeed.scss';

const data = [
	{ title: 'Centralise', date: 'Oct 27, 2019', name: 'Benjamin' },
	{ title: 'Optimize', date: 'Nov 21, 2019', name: 'Jack' },
	{ title: 'Track', date: 'Jun 17, 2019', name: 'Vincent' },
];

const NewsFeed = (props) => {
	return (
		<div className="news-feed">
			<h2>News Feed</h2>
			{data.map(({ title, date, name }) => (
				<NewsBlock title={title} date={date} name={name} />
			))}
		</div>
	);
};

NewsFeed.propTypes = {};

export default NewsFeed;
