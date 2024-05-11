import React from "react";
import ComponentB from "./ComponentB";
export default class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = { name: "component A" };
    console.log("Component A constructor method is called");
  }

  static getDerivedStateFromProps() {
    console.log("Component A:the derived state props function is called");

    return null;
  }
  render() {
    console.log("Component A:render function is called");
    return (
      <>
        <h1>ComponentA</h1>
        <ComponentB />
      </>
    );
  }
  componentDidMount() {
    console.log("Component A:compnent Did mount function is called");
  }
}
