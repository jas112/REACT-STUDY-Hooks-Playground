import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
        this.incrementCount = this.incrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount(){
        let newCount = this.state.count + 1;
        console.log(`count = ${this.state.count} | newCount: ${newCount}`);
        this.setState({count: newCount});
    }

    resetCount(){
        this.setState({count: 0});
    }

  render() {

    const {count} = this.state;

    return (
      <div className='Counter App-module'>
        <h1>{`Counter Equals => ${count}`}</h1>
        <button onClick={this.incrementCount}>Increment Count</button>
        <button onClick={this.resetCount}>Reset Count</button>
      </div>
    )
  }
}

export default Counter;