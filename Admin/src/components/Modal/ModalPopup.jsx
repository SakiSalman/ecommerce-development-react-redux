import React from "react";
import { Modal } from "@rakan/bootstrap4rtl";

const ModalPopup = ({target, children}) => {
  return (
    <div>
      <div
        className="modal fade"
        id={target}
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Specialities</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {
                children
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
