import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    let home = 'home';
    return (
      <div className="header">
        <Link to="/" onClick={() => this.props.handleClick(home)} to={`/`}>
          <h1>winc STUDENT reviews</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
