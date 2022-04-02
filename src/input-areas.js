import React from 'react';
import KeyNav from './key-nav.js';
import PianoArea from './piano-area.js';
import Exercizes from './exercizes.js';
import calculators from './calculators.js';

class InputAreas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: [],
    }
  }

  updateNotes(newNotes) {
    return this.setState({
      activeNotes: newNotes.sort()
    })
  }

  normalizedInput() {
    return this.state.activeNotes.map((midiNum) => {
      let startingNum = this.state.activeNotes[0];
      return (midiNum - startingNum) + 1;
    })
  }

  render() {
    return(
      <div>
        <ul className="navbar-nav mr-auto">
          <KeyNav />
        </ul>
        <div className="row">
          <div className="col-1">
            <Exercizes setLydian={this.setLydian} />
          </div>
          <div className="col-11">
            <PianoArea activeNotes={this.state.activeNotes} updateNotes={this.updateNotes.bind(this)}/>
          </div>
        </div>
        <ul>
          <li>
            activeNotes: {this.state.activeNotes.join(",")}
          </li>
          <li>
            normalizedInput: {this.normalizedInput().join(",")}
          </li>
          <li>
            interval number: {calculators.getIntervalNum(this.normalizedInput())}
          </li>
          <li>
            inverted interval number: {calculators.getInvertedIntervalNum(this.normalizedInput())}
          </li>
          <li>
            interval name: {calculators.getInterval(this.normalizedInput())}
          </li>
          <li>
            inverted interval name: {calculators.getIntervalInversion(this.normalizedInput())}
          </li>
          <li>
            root position triad: {calculators.rootPositionTriad(this.normalizedInput())}
          </li>
          <li>
            first inversion triad: {calculators.firstInversionTriad(this.normalizedInput())}
          </li>
          <li>
            second inversion triad: {calculators.secondInversionTriad(this.normalizedInput())}
          </li>
        </ul>
      </div>
    )
  }
}

export default InputAreas;
