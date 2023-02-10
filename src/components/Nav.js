import React from 'react'
import "../style/Nav.css"
import { NavLink } from "react-router-dom";

function Nav() {
    const checkActive = (match, location) => {
        if (!location) return false;
        const { pathname } = location;
        console.log(pathname);
        return pathname === "/";
    }

    return (
        <div>
            <ul className="nav">
                <li><NavLink className="NavLink" activeclassname="activeRoute" to="/">Home</NavLink></li>
                <li><NavLink className="NavLink" activeclassname="activeRoute" to="/weather">Weather</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav