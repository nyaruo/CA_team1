import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Header extends React.Component{
	render(){
		return(
			<header className="header">
				<div className="header-Name">
					<h1>TITLE</h1>
				</div>
				<div className="header-Nav">
					<ul>
						<li>
							<Link to="/">HOME</Link>
						</li>
						<li>
							<Link to="/menu1">MENU1</Link>
						</li>
						<li>
							<Link to="/menu2">MENU2</Link>
						</li>
					</ul>
				</div>
				<div className="user-Icon">
					<p>アイコン</p>
				</div>
			</header>
		);
	}
}

export default Header;