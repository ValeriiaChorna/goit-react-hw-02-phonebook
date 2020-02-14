import React from 'react';
import T from 'prop-types';

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className="contactList">
          <p>{name}: {number}</p>
          <button className="deleteButton" type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.exact({
      name: T.string,
      id: T.string,
      number: T.string,
    }),
  ).isRequired,
  onRemoveContact:T.func.isRequired,
};
