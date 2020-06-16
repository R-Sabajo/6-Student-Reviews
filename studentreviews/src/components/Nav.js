import Student from './Student';
import React, { Component } from 'react';

export class Nav extends Component {
  render(props) {
    const studentsList = this.props.students.map(item => (
      <Student handleClick={this.props.handleClick} studentname={item} />
    ));

    return (
      <div className="navbar">
        <h3 className="studentList">{studentsList}</h3>
      </div>
    );
  }
}

export default Nav;
