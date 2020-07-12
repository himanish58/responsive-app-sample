import React from 'react';
import './App.scss';

function App() {
	return (
		<>
			<header>
				<img
					src="https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_1280.png"
					alt="logo"
				/>
				<input type="text" name="search" placeholder="Search..." />
			</header>
			<div className="homepage-container">
				<div className="details">
					<div className="welcome">
						<h3>Welcome Lorem</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
							maiores architecto quo quod inventore autem suscipit voluptatem
							quae? Quo obcaecati facere reprehenderit harum iusto dolorum sunt
							magni voluptates accusamus qui consectetur, fugiat fugit
							exercitationem distinctio. Sequi veritatis dignissimos, dolor vel
							aliquid, consequatur, commodi perspiciatis tempore aut sint
							voluptate fugit dolore.
						</p>
					</div>
					<div className="about">
						<h3>About Us</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
							numquam iure, ad odit iusto non. Culpa in distinctio veritatis ab!
							<a href="#">View More</a>
						</p>
					</div>
				</div>
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
				<div className="registration">
					<h3>Registration</h3>
					<label htmlFor="name">Name</label>
					<input type="text" name="registration" id="name" />
					<label htmlFor="name">Email</label>
					<input type="text" name="registration" id="email" />
					<label htmlFor="name">Password</label>
					<input type="password" name="registration" id="password" />
					<div className="buttons-block">
						<button className="cancel">Cancel</button>
						<button className="submit">Submit</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
