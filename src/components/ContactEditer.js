import React, { Component } from 'react';
import T from 'prop-types';

export default class ContactEditer extends Component {
  static propTypes ={
    onAddContact: T.func,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className="contactEdit">
        <form  onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            <p>Number</p>
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.handleChange}
            ></input>
          </label>

          <button type="submit" className="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
