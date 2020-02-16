import React, { Component } from 'react';
import Layout from './Layout';
import uuid from 'uuid';
import ContactEditer from './ContactEditer';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const { name, number } = newContact;
    const { contacts } = this.state;
    const existName = contacts.map(({ name }) => name);
    const contact = {
      id: uuid.v4(),
      name,
      number,
    };
    if (existName.includes(name)) {
      alert(`${name} is allready exist in contacts.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContact = this.getVisibleContacts();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactEditer onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <div>
            <h3>Find contact by name</h3>
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          </div>
        )}
        {visibleContact.length > 0 && <ContactList contacts={visibleContact} onRemoveContact={this.removeContact} />}
      </Layout>
    );
  }
}

export default App;
