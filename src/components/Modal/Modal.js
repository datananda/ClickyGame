import React from "react";
import "./Modal.css";

const Modal = props => {
    if (!props.showInstructions) {
        return null;
    }

    return (
        <div className="modal fade show" displayid="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Instructions</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.toggleInstructions()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Click on a kitty to earn a point. But remember which kitty you clicked because if you click the same one more than once, it's game over!
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
