import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
import EditContact from "./EditContact";

function AddContact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleAddContact = (e) => {
    e.preventDefault();
    const newContact = { name, phone, email };
    axios.post('http://localhost:5000/contacts', newContact)
      .then(() => {
        setName('');
        setPhone('');
        setEmail('');
      })
      .catch(error => console.error(error));
    console.log(name, phone, email);
  }

  return (
    <>
    <Navbar/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <form
        style={{
          
          maxWidth: 400,
          width: "100%",
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#f9f9f9",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleAddContact}
      >
        <h2>Add Contatcs</h2>
        <div className="mb-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add To Contacts
        </button>
      </form>
    </div>
    <EditContact/>
    </>
  );
}

export default AddContact;
