import React from 'react';
import NavButton from './nav-button.js';

const SCALARS = [
  {
    name: "chromatic",
    scalar: 1,
  },
  {
    name: "forward",
    scalar: 7,
  },
  {
    name: "backward",
    scalar: 5,
  },
];

class KeyNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scalarIndex: 0,
      startingNote: 0
    }
  }

  incrementScalarIndex() {
    this.setScalarIndex(this.nextScalar());
  }

  setScalarIndex(newScalarIndex) {
    this.setState({ scalarIndex: newScalarIndex});
  }

  newArray() {
    // adjust based on starting note
    return Array(12).keys()
  }

  order() {
    let numbers = [...this.newArray()].map(x => (x * this.currentScalar()) % 12);
    let set = [...new Set(numbers)];
    set.filter((item, index) => set.indexOf(item) === index);
    set.reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      [],
    );
    return set;
  }

  nextScalar() {
    return (this.state.scalarIndex + 1) % 3;
  }

  currentCycleName() {
    return SCALARS[this.state.scalarIndex].name;
  }

  currentScalar() {
    return SCALARS[this.state.scalarIndex].scalar;
  }

  render() {
    return(
      <div className="container-xxl">
        <button className="btn btn-primary btn-sm" onClick={this.incrementScalarIndex.bind(this)}>
          {this.currentCycleName()}
        </button>
        <div className="row" key="keynav2">
          {this.order(5).map((number, index) => {
            return(
              <div className="col-md" key={`${number}-${index}`}>
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
