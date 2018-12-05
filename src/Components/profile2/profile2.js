import React, { Component } from 'react';

class ProfileTwo extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Card cap" />
        <div className="card-body">
          <p className="card-text">
            <b>@randomuser1</b>
            <hr />
            <span>"Life is short, Live Out Loud"</span>
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileTwo;
