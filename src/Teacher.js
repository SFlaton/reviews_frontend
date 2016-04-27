import React from 'react';

import Review from './Review';
import jQuery from 'jquery';


class Teacher extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      teachers: []
    };
  }


  retreiveTeachers(){
    jQuery.get("http://localhost:3000/teachers", (function(data){
      this.setState({
        teachers: data.teachers,
      });
    }).bind(this));
  }

  componentDidMount() {
    this.retreiveTeachers();
  }


  render() {
    let teachers = this.state.teachers.map(function(teacher){
      return (
        <li key={teacher.id}>
          <h1>Name: {teacher.name}</h1>
          <h2>Nickname: {teacher.nickname}</h2>
          <h2>Subject: {teacher.subject}</h2>
          <h2>School: {teacher.school}</h2>
        </li>
      );
    });
    return (
      <ul>
        {teachers}
      </ul>
    )
  }
}

export default Teacher;
