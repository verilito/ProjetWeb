import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/dashboard_style.css';

const Navigation = () => {
    return (
        <div >

            <NavLink exact to="/">
                Dashboard
            </NavLink>

            <NavLink exact to="/monprofil">
                Mon Profil
            </NavLink>
        </div>

    );
};

export default Navigation;