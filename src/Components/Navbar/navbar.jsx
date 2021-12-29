import React from 'react';
import "./navbar.css";
import SearchIcon from "../../assets/icons/notification.png"
import NotificationIcon from "../../assets/icons/searchIcon.png"
import NavbarIcon from "../../assets/icons/VectorNavbar.png"
export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Dashboard</h1>
            <div className="search icon">
                <img src={SearchIcon} alt="searchIcon" />
            </div>
            <div className="search notification">
                <img src={NotificationIcon} alt="NotificationIcon" />
            </div>
           <div className="avatar"></div>
           <p>Erza Miller</p>
           <img src={NavbarIcon} alt="NavbarIcon" />
        </div>
    )
}
