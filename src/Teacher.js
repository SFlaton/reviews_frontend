import React from 'react';

class Teacher extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        teachers: []
      };
    }

    componentDidMount(){
        this.setState({
          teachers: [{name: 'Wouter', nickname: 'Foxycoder', subject: 'anything concerning rails', school: 'Codaisseur'}, {name: 'Andrew', nickname: 'unknown', subject: 'advisor', school: 'Codaisseur'}],
        });
    }

    render() {
        let teachers = this.state.teachers.map(function(teacher){
          return <li key={teacher.id}><h1>Name: {teacher.name}</h1><h2>Nickname: {teacher.nickname}</h2><h2>Subject: {teacher.subject}</h2><h2>School: {teacher.school}</h2></li>;
        });

        return (
          <ul>
            {teachers}
          </ul>
        )
    }
}

export default Teacher;
