import React, { Component } from 'react';
import Form from './Form';

class ParentComponent extends Component {
  state = {
    firstName: '',
    lastName: '',
  }

  handleFirstNameChange = evt => {
    this.setState({
      firstName: evt.target.value
    })
  }

  handleLastNameChange = evt => {
    this.setState({
      lastName: evt.target.value
    })
  }

  render() {
    return (
      <Form 
        formData={this.state}
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
      />
    )
  }
}

export default ParentComponent; 