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
      <button className="btn btn-light">{helpers.numToNoteName(this.state.mkey)}</button>
    )
  }
}

export default NavButton;
