import React from "react";
export default class ComponentB extends React.Component {
  constructor() {
    super();
    this.state = { name: "Component B", data: [] };
    console.log("Component B constructor method is called");
  }

  static getDerivedStateFromProps() {
    console.log("Component B: the derived state props function is called");

    return null;
  }
  render() {
    console.log("Component B: render function is called");
    return (
      <>
        <h1>ComponentB</h1>
        <ul>
          {this.state.data.map((d) => {
            return <li>{d.username}</li>;
          })}
        </ul>
      </>
    );
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
    console.log("Component B:compnent Did mount function is called");
  }
}
