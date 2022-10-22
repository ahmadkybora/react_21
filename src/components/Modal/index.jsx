import React, { useEffect } from "react";
import { Button } from "..";
import $ from "jquery";

const Modal = ({
    style, 
    divStyle, 
    name, 
    type, 
    ...otherProps
}) => {
  // useEffect(() => {});
  // const movable = () => {
  //   $('.modal').modal({ keyboard: false, show: true});
  //   $('.modal-dialog').draggable({handle: ".modal-header"});
  // }
  const { btnClose, modalBody, btnCloseColor, modalTitle } = otherProps;
  return(
    <React.Fragment>
      <Button 
        type="button" 
        style="btn btn-primary" 
        name={name}
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
        />

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{modalTitle}</h5>
              <Button 
                type="button" 
                style="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                />
            </div>

            <div class="modal-body">{modalBody}</div>

            <div class="modal-footer">
              <Button 
                type="button" 
                style={`btn btn-secondary ${btnCloseColor}`}
                data-bs-dismiss="modal"
                name={btnClose}
                />
              <Button 
                type="button" 
                style="btn btn-primary"
              />
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
);
}

export default Modal;