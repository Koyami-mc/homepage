// src/components/hero.js
import React from "react"
import "../styles/hero.css"
import ICON_IMG from "../../static/icon.jpg"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my homepage!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src={ICON_IMG}  className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by Koyami.<br />
                </p>
            </div>
        </div>
    )
}