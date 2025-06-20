// src/Components/Color.js
import React from 'react';

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component is about to be unmounted!");
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('after update');
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change to Blue</button>
        <br /><br />
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete</button>
      </div>
    );
  }
}

export default Color;
