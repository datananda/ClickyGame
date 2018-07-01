import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
            <span className="navbar-brand mb-0 h1">ClickyKitty
                <button onClick={() => props.toggleInstructions()} type="button" className="btn btn-sm btn-outline-primary ml-3"><span className="oi oi-info" title="icon name" aria-hidden="true"></span></button>
            </span>
            {/* <div>
                <span className="navbar-text mr-3">Level</span>
                <div className="btn-group btn-group-sm" role="group" aria-label="game level">
                    <button type="button" className="btn btn-outline-secondary">1</button>
                    <button type="button" className="btn btn-outline-secondary">2</button>
                    <button type="button" className="btn btn-outline-secondary">3</button>
                    <button type="button" className="btn btn-outline-secondary">4</button>
                    <button type="button" className="btn btn-outline-secondary">5</button>
                </div>
            </div> */}
            <span className="navbar-text">
                Score <span className="badge p-2 mr-3 badge-secondary">{props.score}</span> Top Score <span className="badge p-2 badge-secondary">{props.topScore}</span>
            </span>
        </div>
    </nav>
)

export default Navbar;
