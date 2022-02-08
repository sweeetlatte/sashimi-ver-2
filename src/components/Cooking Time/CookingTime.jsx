import React from "react";

import "./cookingTime.css";

import timerIcon from "../../assets/icons/timer.svg";
import peopleIcon from "../../assets/icons/user.svg";

export default function CookingTime() {
    return (
        <div className="group-info-1">
            <div className="title-1">Cooking Time</div>
            <div className="row">
                <img className="info-icon" src={timerIcon} alt="timer icon" />
                <div className="info-text-1" style={{ fontWeight: "bold" }}>
                    1h 30m
                </div>
            </div>
            <div className="info-bottom">
                <div className="title-1">Serving</div>
                <div className="row">
                    <img
                        className="info-icon"
                        src={peopleIcon}
                        alt="people icon"
                    />
                    <div className="info-text-1">2 people</div>
                </div>
            </div>
        </div>
    );
}
