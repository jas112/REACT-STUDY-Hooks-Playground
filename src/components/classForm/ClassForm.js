import React, { Component } from 'react';

class ClassForm extends Component {
    constructor(props){
        super(props);
        this.state = {email: ''};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

  render() {
    const {email} = this.state;
    return (
      <div className='ClassForm App-module'>
        <h1>Class Form</h1>
        <h1>{`Email entered => ${email}`}</h1>
        <input 
            type='text'
            name='email'
            value={email}
            onChange={this.handleOnChange}
        ></input>
      </div>
    )
  }
}

export default ClassForm;