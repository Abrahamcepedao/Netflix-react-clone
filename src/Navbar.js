import React from 'react';
import { Link } from "react-router-dom";
import { useDataLayerValue } from './DataLayer';
import './Navbar.css'



function Navbar() {
    const [{avatar}] = useDataLayerValue();

    return (
      <div className={"navbar__black"}>
        <Link to="/">
          <img
            className="navbar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </Link>
        <Link to="/login">
            <img
            className="navbar__avatar"
            src={avatar}
            alt="AC"
            />
        </Link>
        
      </div>
    );
}

export default Navbar;
