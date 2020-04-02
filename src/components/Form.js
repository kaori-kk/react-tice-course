import React from 'react';

class Form extends React.Component {
  state = {
    name: '',
    submittedName: ''
  }

  handleName= (event) => {
    this.setState({
      name: event.target.value,
      
    });
  }
    
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submittedName: this.state.name
    })
  }

  render(){
    return (
      <div>
        <ul>
          <li>{this.state.submittedName}</li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={this.state.name}
            onChange={this.handleName}
          />
          <input
              type='submit'
              value='Add'
          />
        </form>
      </div>
    );
  }

}

export default Form;
