import React from 'react';

class Exercizes extends React.Component {
  constructor(props) {
    super(props);

    this.setLydian = props.setLydian;
  }

  render() {
    return (
      <div className="container-sm">
        <ul>
          <li>
            <button className="btn" onClick={this.setLydian}>Lydian</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Exercizes;
