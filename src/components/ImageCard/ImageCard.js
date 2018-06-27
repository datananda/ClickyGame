import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="col-3" onClick={() => props.clickKitty(props.id)}>
        <div className="kitty-container mb-4">
            <img className="img-thumbnail img-fluid kitty-image" src={props.src} alt="kitty" />
        </div>
    </div>
)

export default ImageCard;
