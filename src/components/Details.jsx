import React from 'react';
import DetailBlock from './DetailBlock';
import '../styles/Details.scss';
const data = [
	{
		title: 'Welcome Lorem',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, reprehenderit sit! Ipsa esse eaque illum accusantium molestiae voluptatum debitis, asperiores saepe vero reiciendis. Est, dolor aliquam voluptatum amet praesentium tenetur nobis qui asperiores eveniet dolorem blanditiis repellendus porro? Officia sint praesentium quidem fugiat neque porro at dignissimos suscipit aut sunt?',
		showViewMore: false,
	},
	{
		title: 'About Us',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus reprehenderit nulla ea explicabo officia assumenda, perferendis impedit exercitationem quam enim consequuntur, maxime culpa commodi recusandae debitis consequatur veniam. Corrupti.',
		showViewMore: true,
	},
];

const Details = (props) => {
	return (
		<div className="details">
			{data.map(({ title, description, showViewMore }) => (
				<DetailBlock
					key={title}
					title={title}
					description={description}
					showViewMore={showViewMore}
				/>
			))}
		</div>
	);
};

export default Details;
