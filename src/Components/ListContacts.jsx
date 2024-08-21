import React, { useEffect, useState } from 'react'

import Navbar from '../Components/Navbar'
import axios from 'axios';
import EditContact from './EditContact';

function ListContacts() {

     const [contacts, setContacts] = useState([])
     const [selectedContact, setSelectedContact] = useState(null);
     const [isModalOpen, setIsModalOpen] = useState(false);
    
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

    const handleDelete= async (id)=>{
      await axios.delete(`http://localhost:5000/contacts/${id}`)
      .then(alert('Contact deleted successfully!'))
      .catch((error) => {
        console.error(error);
      });
    }
    const handleEdit = (contact) => {
      setSelectedContact(contact);
      setIsModalOpen(true); 
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedContact(null);
    };

  return (
    <>
    <Navbar hide={true}/>
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
              
              <button className="btn btn-primary btn-sm me-2"onClick={() => handleEdit(contact)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(contact.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
    {selectedContact && ( <EditContact isOpen={isModalOpen} onClose={handleCloseModal}  contact={selectedContact} />
      )}

    </>
  )
}

export default ListContacts