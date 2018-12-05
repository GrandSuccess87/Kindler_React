import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="container">
      <div className="card">
        <img className="card-img-top" src="https://randomuser.me/api/portraits/men/86.jpg" alt="Card cap" />
        <div className="card-body">
          <p className="card-text">
            <b>@randomuser1</b>
            <hr />
            <span>"Live Out Loud"</span>
          </p>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="https://randomuser.me/api/portraits/men/77.jpg" alt="Card cap" />
        <div className="card-body">
          <p className="card-text">
            <b>@randomuser2</b>
            <hr />
            <span>"Life is short."</span>
          </p>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="https://randomuser.me/api/portraits/men/83.jpg" alt="Card cap" />
        <div className="card-body">
          <p className="card-text">
            <b>@randomuser3</b>
            <hr />
            <span>"Life is short, Live Out Loud"</span>
          </p>
        </div>
      </div>

      </div>

    );
  }
}

export default Profile;
