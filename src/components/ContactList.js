import React from 'react';
import T from 'prop-types';
import ContactItem from './ContactItem';

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onRemoveContact={onRemoveContact}
        />
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
  onRemoveContact: T.func.isRequired,
};
