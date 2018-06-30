import React from "react";
import "./Alert.css";

const Alert = props => (
    <div className="col-12">
        <div className={`alert alert-${props.type}`} role="alert">
            {props.message}
        </div>
    </div>
)

export default Alert;
