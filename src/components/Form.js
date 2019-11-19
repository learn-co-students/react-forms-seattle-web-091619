import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input 
            type='text'
            onChange={evt => this.props.handleFirstNameChange(evt)}
            value={this.props.formData.firstName}
          />
          <input 
            type='text'
            onChange={evt => this.props.handleLastNameChange(evt)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;