import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/">
                Widgets
            </NavLink>
            <NavLink exact to="/monprofil">
                Mon Profil
            </NavLink>
        </div>
    );
};

export default Navigation;