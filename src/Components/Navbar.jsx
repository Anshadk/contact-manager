import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({hide}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{hide? "Contacts":"Home"}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              
            </ul>
           {hide && <Link to="/add" className="btn btn-success ms-auto">
              Add Contact
            </Link>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
