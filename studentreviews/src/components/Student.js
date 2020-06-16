import React from 'react';
import { Link } from 'react-router-dom';

class Student extends React.Component {
  render(props) {
    return (
      <div>
        <Link
          className="student"
          onClick={() => this.props.handleClick(this.props.studentname)}
          to={`/${this.props.studentname}`}
        >
          {this.props.studentname}
        </Link>
      </div>
    );
  }
}

export default Student;
