import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return(
		<div className="header">
			<ul className="nav-bar">
				<li className="logo"><Link to="/" className="theme">Wastefactory</Link></li>
				<li className="author"><a href="https://github.com/wastefactory" target="_blank"><i className="fa fa-github"></i></a></li>
			</ul>
		</div>
  );
};

export default Header;
