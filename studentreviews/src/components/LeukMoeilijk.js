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
        <label for="moeilijk">
          <h3 className="labelMoeilijk">Moeilijk</h3>
        </label>

        <label for="leuk">
          <h3 className="labelLeuk">Leuk</h3>
        </label>
      </div>
    );
  }
}

export default LeukMoeilijk;
