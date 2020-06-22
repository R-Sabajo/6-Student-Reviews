import React, { Component } from 'react';

export class LeukMoeilijk extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    let moeilijk = 'moeilijk';
    let leuk = 'leuk';
    return (
      <div className="leukMoeilijk">
        <input
          type="checkbox"
          id="moeilijk"
          checked={this.props.checkMoeilijk}
          // onClick={() => this.props.handleClick(moeilijk)}
        />
        <label for="moeilijk">
          <h3 className="labelMoeilijk">Moeilijk</h3>
        </label>
        <input
          type="checkbox"
          id="leuk"
          checked={this.props.checkLeuk}
          // onClick={() => this.props.handleClick(leuk)}
        />
        <label for="leuk">
          <h3 className="labelLeuk">Leuk</h3>
        </label>
      </div>
    );
  }
}

export default LeukMoeilijk;
