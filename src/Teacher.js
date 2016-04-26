import React from 'react';
import jquery from 'jquery';
import Form from './Form';
import Review from './Review';

class Teacher extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        teachers: []
      };
    }

    componentDidMount(){
        this.setState({
          teachers: [{id: 1, name: 'Wouter', nickname: 'Foxycoder', subject: 'anything concerning rails', school: 'Codaisseur'}, {id: 2, name: 'Andrew', nickname: 'unknown', subject: 'advisor', school: 'Codaisseur'}],
        });
    }
    componentDidMount() {
        this.retreiveTeachers();
      }

      retreiveTeacher(){
        var app = this;
        jQuery.get("http://localhost:3000/courses.json", (function(data){
          app.setState({
            courses: data.teacher,
          });
        }).bind(this));
      }

    render() {
        let teachers = this.state.teachers.map(function(teacher){
          return <li key={teacher.id}><h1>Name: {teacher.name}</h1><h2>Nickname: {teacher.nickname}</h2><h2>Subject: {teacher.subject}</h2><h2>School: {teacher.school}</h2></li>;
        });

        return (
          <ul>
            {teachers}
            <Form onAddTeacher={this.retreiveTeacher.bind(this)} />
            <Review />
          </ul>
        )
    }
}

export default Teacher;
