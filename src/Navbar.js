import React from 'react';
import { Link } from "react-router-dom";
import { useDataLayerValue } from './DataLayer';
import './Navbar.css'



function Navbar() {
    const [{avatar}] = useDataLayerValue();

    return (
      <div className={"navbar__black"}>
        <Link to="/" style={{cursor: "pointer"}}>
          <img
            className="navbar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
          />
        </Link>
        <img
          className="navbar__avatar"
          src={avatar}
          alt="AC"
        />
      </div>
    );
}

export default Navbar;
