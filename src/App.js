import React, { Component } from 'react';
import './App.css';
import Normal from './components/normal';
import Formikco from './components//formik'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }

  }



 

  render() {
    return (
      <div className="App">
      
      <Normal />
      <Formikco />

      </div>
    );
  }
}

export default App;
