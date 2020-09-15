import React, { useState, useEffect } from 'react';
import './Navbar.css'



function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? handleShow(true) : handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <img
                className="navbar__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix logo"
            />
            <img
                className="navbar__avatar"
                src="https://occ-0-637-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABRKK34NUrzt3JoyLKtp4cGQq6g_3LMz7UqKuATx7_3xxL1A2MkyI-cyXHwKfDFiEOEmcCzPHWxdl9ZJPHPOCQzlEnOeg.png?r=3ce"
                alt="Netflix logo"
            />
        </div>
    )
}

export default Navbar;
