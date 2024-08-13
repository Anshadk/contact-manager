import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

function ListContacts() {
    const [contacts, setContacts] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/contacts')
          .then((response) => response.json())
          .then((data) => setContacts(data));
      }, []);
      console.log(contacts);

  return (
    <>
    {/* <Navbar/> */}
    <div>
      <h1>Posts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} , {contact.phone_num},{contact.address}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default ListContacts