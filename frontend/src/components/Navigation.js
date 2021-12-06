import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/dashboard_style.css';

const Navigation = () => {
    return (
        <div >
            <div id="navi">
                <NavLink exact to="/">
                    Dashboard
                </NavLink>
            </div>
            <br />
            <div id="navi">
                <NavLink exact to="/monprofil">
                    Mon Profil
                </NavLink>
            </div>
        </div>

    );
};

export default Navigation;