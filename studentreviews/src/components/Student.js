import React from 'react';
import { Link } from 'react-router-dom';

class Student extends React.Component {
  render(props) {
    return (
      <div className="Student">
        <input type="checkbox" name={this.props.studentname} />
        <Link
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
