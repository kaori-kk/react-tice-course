import React from 'react';
import '../App.css';
import Form from './Form'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi there</h1>
        <h2>Add your name below:</h2>
        <Form />
      </div>
    );
  }
}

export default App;
