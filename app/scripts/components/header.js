import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="clearfix">
      <span className="logo logo-font theme">
        {"< "}
          <span className="w">w</span>
          <span className="a">a</span>
          <span className="s">s</span>
          <span className="t">t</span>
          <span className="e">e</span>
          factory.
        {" />"}
      </span>
      <nav className="clearfix">
        <div className="nav-item">
          <a href="https://github.com/wastefactory" target="_blank"><i className="fa fa-github"></i></a>
        </div>
      </nav>
    </header>
  )
};

export default Header;
