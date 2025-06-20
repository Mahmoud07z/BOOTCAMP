// src/App.js
import React, { Component } from 'react';
import FormComponent from './Components/FormComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      lactoseFree: false
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    for (let key in this.state) {
      const val = this.state[key];
      if (typeof val === 'boolean') {
        if (val) params.append(key, 'on');
      } else {
        params.append(key, val);
      }
    }

    const queryString = params.toString();
    window.history.pushState({}, '', `?${queryString}`);
    alert("Form data submitted to URL!");
  };

  render() {
    return (
      <div style={{ backgroundColor: "#f3f3f3", minHeight: "100vh", padding: "40px" }}>
        <div style={{
          backgroundColor: "#fff",
          padding: "30px",
          maxWidth: "500px",
          margin: "0 auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
          <FormComponent
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
