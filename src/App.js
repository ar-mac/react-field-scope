import React, { Component } from 'react';

import './App.css';
import ReduxFormWithScoping from './components/ReduxFormWithScoping';

class App extends Component {
  state = {
    submittedData: null,
  };

  submit = (submittedData) => {
    this.setState({ submittedData });
  };

  render() {
    const { submittedData } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <h4>Scoping fields for - Redux Form</h4>
        </div>
        <div className="row justify-content-md-center">
          <ReduxFormWithScoping onSubmit={this.submit} />
        </div>
        {submittedData && <pre>{JSON.stringify(submittedData, null, 2)}</pre>}
      </div>
    );
  }
}

export default App;
