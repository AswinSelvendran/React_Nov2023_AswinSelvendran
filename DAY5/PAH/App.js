import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "IamNeo"
    };
  }

  componentDidMount() {
    console.log("Component Did MOUNT!");
  }

  componentWillUnmount() {
    console.log("Component Will UNMOUNT!");
  }
componentWillReceiveProps()
{
  console.log("Component Will Receive Props!");
}
componentWillUpdate()
{
  console.log("Component Will UPDATE!");
}
componentDidUpdate()
{
  console.log("Component Did UPDATE!");
}
componentWillUnmount()
{
  console.log("Component Will UNMOUNT!");
}
  render() {
    return (
      <>
        <header>{this.state.txt}</header>
        <button
          onClick={() => {
            this.setState({ txt: "Welcome to React" });
          }}
        >
          Click
        </button>
      </>
    );
  }
}

export default App;
