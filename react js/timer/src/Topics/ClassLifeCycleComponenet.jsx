import React, { Component } from "react";
class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log(`Constructor: Initializing state and binding methods`);
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }));
    }, 1000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate: Deciding if component should update",
      nextProps,
      nextState
    );
    return nextState.count % 2 === 0;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "componentDidUpdate: Component has updated",
      prevProps,
      prevState,
      snapshot
    );
    if (snapshot) {
      console.log("Snapshot:", snapshot);
    }
  }
  componentWillUnmount() {
    console.log(
      "componentWillUnmount: Cleaning up before component is unmounted"
    );
    clearInterval(this.timerID);
  }
  render() {
    return <h1>{this.state.count}</h1>;
  }
}
export default LifecycleDemo;
