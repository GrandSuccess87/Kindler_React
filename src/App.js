import React, { Component } from 'react';
import './App.css';
// import SampleComponent from './Components/sampleComponent/sampleComponent';
import Header from './Components/header/header';
import Profile from './Components/profile/profile';
// import ProfileTwo from './Components/profile2/profile2';

class App extends Component {
  render() {
    return (
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Header />
                  </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Profile />
                </div>
              </div>
            </div>
    );
  }
}

export default App;
