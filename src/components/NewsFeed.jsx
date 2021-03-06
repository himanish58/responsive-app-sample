import React from 'react';
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
				<NewsBlock key={title} title={title} date={date} name={name} />
			))}
		</div>
	);
};

export default NewsFeed;
