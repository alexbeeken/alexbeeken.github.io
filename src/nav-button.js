import React from 'react';
const helpers = require('./helpers.js');

class NavButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mkey: props.mkey
    };
  };

  render() {
    return (
      <li className="nav-item">
        <button className="btn btn-primary">{helpers.numToName(this.state.mkey)}</button>
      </li>
    )
  }
}

export default NavButton;
