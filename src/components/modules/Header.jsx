import React from 'react';
import { Link } from 'react-router-dom';
import projectIcon from '../../icons/projectIcon.png';
import userIcon from '../../icons/userIcon.png';
import logoutImage from '../../icons/logout.png';

class Header extends React.Component{
	render(){
		return(
			<header className="header">
				<div className="header-Name">
					<img src={ projectIcon } />
					<h1>StudyPro</h1>
				</div>
				<div className="header-Nav">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/timer">Timer</Link>
						</li>
						<li>
							<Link to="/login">Sign out</Link>
						</li>
					</ul>
				</div>
				<div className='header-bottom'>
					<div className='user-icon'>
						<img src={ userIcon }/>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;