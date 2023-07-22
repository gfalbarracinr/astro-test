import React, { useState } from "react";
import "./index.css";
import MobileMenuButton from "../mobileMenuButton";
interface Props {
    currentPath: string;
}
function NavBar({currentPath}: Props) {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    return ( 
        <React.Fragment>
            <MobileMenuButton state={openMobileMenu} setState={() => {setOpenMobileMenu((prevState) => !prevState)}} />
            <ul className={`navbar-menu navbar-element ${openMobileMenu ? "menu-open" : "menu-close"}`}>
            <li className={`navbar-item ${currentPath === "" ? "navbar-item-active" : ""}`}><a className="navbar-link" href="/">Home</a></li>
            <li className={`navbar-item ${currentPath === "partners" ? "navbar-item-active" : ""}`}><a className="navbar-link" href="/partners">Partners</a></li>
            <li className={`navbar-item ${currentPath === "services" ? "navbar-item-active" : ""}`}><a className="navbar-link" href="/services">Services</a></li>
            <li className={`navbar-item ${currentPath === "team" ? "navbar-item-active" : ""}`}><a className="navbar-link" href="/team">Team</a></li>
            <li className={`navbar-item ${currentPath === "jobs" ? "navbar-item-active" : ""}`}><a className="navbar-link" href="/jobs">Jobs</a></li>
            <li className={`navbar-item ${currentPath === "about" ? "navbar-item-active" : ""}`}><a className="navbar-link" href="/about">About us</a></li>
            </ul>
        </React.Fragment>
    );
}

export default NavBar;