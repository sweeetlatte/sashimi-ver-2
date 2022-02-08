import React from "react";

import "./iconMenu.css";

import menuIcon from "../../assets/icons/menu.svg";

export default function IconMenu() {
    return (
        <div className="group-icon">
            <img className="icon" src={menuIcon} alt="menu icon" />
        </div>
    );
}
