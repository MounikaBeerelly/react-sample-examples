import React from "react";
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayoutComponent = () => {
    const active = {
        fontWeight : 'bold',
        color : 'blue',
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl mb-3">Dashboard Layout</h1>

            <nav style={{display:"flex", gap: "10px"}} >
                <NavLink to="stats" style={({isActive}) => (isActive ? active : {})}>
                    Stats
                </NavLink>
                <NavLink to="reports" style = {({isActive}) => (isActive ? active : {})}>
                    Reports
                </NavLink>
            </nav>

            <Outlet />
        </div>
    );
}

export default DashboardLayoutComponent;