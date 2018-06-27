import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-light bg-light mb-4">
        <div className="container">
            <span className="navbar-brand mb-0 h1">ClickyKitty</span>
            <span className="navbar-text">
                Score <span className="badge badge-pill badge-secondary">{props.score}</span> | Top Score <span className="badge badge-pill badge-secondary">{props.topScore}</span>
            </span>
        </div>
    </nav>
)

export default Navbar;
