import React from "react";
import { NavLink } from 'react-router-dom';

const NavBarComponent = () => {
    const activeStyle = {
        fontWeight : 'bold',
        textDecoration : 'underline',
    };

    return (
        <div>
            <nav style= {{display:"flex", gap: "10px"}}>
                <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : {})}>
                    Home
                </NavLink>
                <NavLink to="/about" style={({isActive}) => (isActive ? activeStyle : {})}>
                    About
                </NavLink>
                <NavLink to="/contact" style={({isActive}) => (isActive ? activeStyle : {})}>
                    Contact
                </NavLink>
                <NavLink to="/products" style={({isActive}) => isActive ? activeStyle : {}}>
                    Products
                </NavLink>
                <NavLink to="/users" style={({isActive}) => isActive ? activeStyle : {}}>
                    Users
                </NavLink>
                <NavLink to="/dashboard" style={({isActive}) => (isActive ? activeStyle : {})}>
                    Dashboard
                </NavLink>
            </nav>
        </div>
    );
}

export default NavBarComponent;