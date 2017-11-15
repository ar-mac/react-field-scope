import React, { Component } from 'react';

import './App.css';
import ReduxFormWithScoping from './components/ReduxFormWithScoping';

class App extends Component {
  submit = (formData) => {
    console.log(`formData: `, formData);
  };

  render() {
    return (
      <div className="App">
        <ReduxFormWithScoping onSubmit={this.submit}/>
      </div>
    );
  }
}

export default App;
