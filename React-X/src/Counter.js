
import React from 'react';


const COUNT_STEP = 2;

export default class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  componentDidMount() {
    this.timeout = setTimeout(this.handleTimeoutEvent.bind(this), 1000);
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout);
  }

  handleTimeoutEvent() {
    this.setState((prevState, props) => ({
      value: prevState.value + COUNT_STEP
    }), () => {
      this.timeout = setTimeout(this.handleTimeoutEvent.bind(this), 1000);
    });
  }

  render() {
    return (
      <div className="content-main container">
        <p className="time"> 现在的计时: {this.state.value} </p>
         <img src="./img/tu3.jpg" style={{width:"100%"}}/>
      </div>
    );
  }
}

