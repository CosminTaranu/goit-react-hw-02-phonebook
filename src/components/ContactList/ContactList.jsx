import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        contact={contact}
        onDelete={() => onDeleteContact(contact.id)}
      />
    ))}
  </ul>
);

export default ContactList;
