import React from "react";

export default class ErrorHandling extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("error :", error);
    console.log("info :", info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>something Went wrong contact Admin</h1>;
    }
    return this.props.children;
  }
}
