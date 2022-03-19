import React from 'react';
import NavButton from './nav-button.js';

class KeyNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'chromatic'
    }
  }

  changeOrder() {
    console.log(this.state.order);
    if (this.state.order === 'chromatic') {
      this.setState({ order: 'fifths'});
    } else {
      this.setState({ order: 'chromatic'});
    };
    return true;
  }

  order(scalar) {
    if (this.state.order === 'chromatic') {
      return [...Array(12).keys()]
    } else {
      return [...Array(12).keys()].map(x => (x * scalar) % 12);
    };
  }

  render() {
    return(
      <div className="container-xxl">
        <div className="row" key="keynav1">
          <button className="btn btn-primary btn-sm" onClick={this.changeOrder.bind(this)}>
            change to {this.state.order} 
          </button>
        </div>
        <div className="row" key="keynav2">
          {this.order(5).map((number) => {
            return(
              <div className="col-md" key={number}>
                <NavButton key={number} mkey={number} />            
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default KeyNav;
