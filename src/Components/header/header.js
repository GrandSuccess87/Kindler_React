import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
            <div className="container">
              <div className="jumbotron">
                <h1><span aria-label="Fire emoji" role="img">Welcome To Kindler</span></h1>
                <span className="small">Definitely Not Like Tinder</span>
              </div>
            </div>
    );
  }
}

export default Header;
