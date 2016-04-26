import React from 'react';
import jquery from 'jquery';

class Form extends React.Component{
  constructor(){
    super();
  }
  createTeacher(event){
    event.preventDefault();
    let newTeacher = {
      name: this.refs.name.value,
      nickname: this.refs.nickname.value
      subject: this.refs.subject.value
      school: this.refs.subjec.value

    };
    var app = this;
    jQuery.ajax({
      type: "POST",
      url: "http://localhost:3000/courses.json",
      data: JSON.stringify({
        teacher: newTeacher
      }),
      contentType: "application/json",
      dataType: "json"
    }).done(function( data ) {
      app.props.onAddTeacher();

    })
    .fail(function(error) {
      console.log(error);
    });
  }
  render() {
      return (
          <div>
            <form onSubmit={this.createTeacher.bind(this)}>
              <input type="text" className="form-control" ref="name" placeholder="What is your teachers name?" />
              <input type="text" className="form-control" ref="nickname" placeholder="Does your teacher have a nickname?" />
              <input type="text" className="form-control" ref="subject" placeholder="What is your teacher teaching?" />
              <input type="text" className="form-control" ref="school" placeholder="At what school does your teacher teach?" />
                            <button type="submit" className="btn btn-primary">Create Teacher</button>
            </form>
          </div>
      );
  }
}
export default Form;
}
