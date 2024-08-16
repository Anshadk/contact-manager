import React, { useEffect, useState } from "react";

function AddContact() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    
  return (
    <>
      <form
        style={{
          maxWidth: 400,
          margin: "auto",
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#f9f9f9",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter your address"
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-100">
          Add To Contacts
        </button>
      </form>
    </>
  );
}

export default AddContact;
