import React from "react";
import TimerOne from "./timer/timerOne";
import ComponentA from "./ComponentA";
import ErrorHandling from "./ErrorHandling";
class App extends React.Component {
  constructor() {
    super();
    this.state = { timerOn: false };
  }
  toggleTimer = () => {
    this.setState({ timerOn: !this.state.timerOn });
  };
  render() {
    return (
      <>
        <ErrorHandling>
          <ComponentA />
        </ErrorHandling>
        <TimerOne timerOn={this.state.timerOn} />
        <button onClick={this.toggleTimer}>
          {this.state.timerOn ? "STOP" : "START"}
        </button>
      </>
    );
  }
}

export default App;
