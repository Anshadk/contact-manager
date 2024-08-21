import React from 'react';

function EditContact({ isOpen, onClose, contact }) {
  if (!contact) return null; // Handle case where no contact is passed

  return (
    <>
      <div
        className={`modal fade ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isOpen}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Contact</h1>
              <button  type="button"  className="btn-close" data-bs-dismiss="modal"  aria-label="Close"  onClick={onClose}  ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" defaultValue={contact.name} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="form-control" defaultValue={contact.phone} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" defaultValue={contact.email} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>
                Close
              </button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditContact;
