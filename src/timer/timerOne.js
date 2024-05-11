import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();
    this.state = { time: 0 };
    this.timer = null;
  }
  static getDerivedStateFromProps() {
    console.log("TimerOne: Derived state props function is called");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("TimerOne: should update function is called");

    return nextState.time % 5 === 0;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("TimerOne: snapshot before update function is called");
    return "hello";
  }
  render() {
    console.log("TimerOne: render function is called");
    return (
      <h1>
        TimerOne:{new Date(this.state.time * 1000).toISOString().slice(11, 19)}
      </h1>
    );
  }
  componentDidMount() {
    console.log("TimerOne: component did mount function is called");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("previous Prop", prevProps);
    console.log("previous state:", prevState);
    console.log("snapshot", snapshot);
    console.log("_________________________________________________");
    if (this.props.timerOn && !prevProps.timerOn) {
      console.log("i am inside start timer");
      this.timer = setInterval(() => {
        this.setState((prevState) => ({ time: prevState.time + 1 }));
      }, 1000);
    } else if (!this.props.timerOn && prevProps.timerOn) {
      console.log("i am inside clear function");
      clearInterval(this.timer);
    }
  }
  componentWillUnmount() {
    console.log("Timer componentWillUnmount");
    if (this.state.time === 10) {
      clearInterval(this.timer);
    }
  }
}
