import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentData from './StudentData';
import StudentChartView from './StudentChartView';
import Header from './Header';
import Footer from './Footer';

import Nav from './Nav';

export class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      studentData: StudentData.StudentData,
      students: StudentData.Students,
      ShowAvgScores: StudentData.ShowAvgScores,
      Showhome: StudentData.ShowAvgScores,
      moeilijkChecked: true,
      leukChecked: false,
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick = student => {
    if (student === 'home') {
      this.setState(prevState => {
        const home = prevState.Showhome;
        return {
          ShowAvgScores: home,
        };
      });
    } else {
      this.setState(prevState => {
        const studentFilter = prevState.studentData.filter(item => {
          if (student === item.student) return item;
        });
        return {
          ShowAvgScores: studentFilter,
        };
      });
    }
  };

  render() {
    return (
      <div className="main">
        <Router>
          <Header handleClick={this.handleClick} />
          <Nav
            studentData={this.state.studentData}
            students={this.state.students}
            handleClick={this.handleClick}
          />

          <Route
            path="/"
            render={props => (
              <React.Fragment>
                <StudentChartView studentData={this.state.ShowAvgScores} />
              </React.Fragment>
            )}
          />

          <Footer />
        </Router>
      </div>
    );
  }
}

export default MainContainer;
