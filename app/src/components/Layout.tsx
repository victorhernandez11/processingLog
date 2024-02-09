import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
    return <div>
        <p>This is our layout</p>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/work">Work</Link>
            </li>
        </ul>
        <Outlet />
    </div>;
}
