import React, { useEffect, useState } from 'react'

import Navbar from '../Components/Navbar'
import AddContact from './AddContact';
import axios from 'axios';

function ListContacts() {

     const [contacts, setContacts] = useState([])
    
    // useEffect(() => {
    //     fetch('http://localhost:5000/contacts')
    //       .then((response) => response.json())
    //       .then((data) => setContacts(data));
    //   }, []);
    //   console.log(contacts);

    //using axios
    useEffect(() => {
        axios.get('http://localhost:5000/contacts')
          .then((response) => {
            setContacts(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [contacts]);

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      {/* <h1 className="mb-4">Contacts</h1> */}
      <ul className="list-group">
        {contacts.map((contact) => (
          <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{contact.name}</strong>
              <br />
              {contact.phone}
              <br />
              {contact.email}
            </div>
            <div>
              <button className="btn btn-primary btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default ListContacts