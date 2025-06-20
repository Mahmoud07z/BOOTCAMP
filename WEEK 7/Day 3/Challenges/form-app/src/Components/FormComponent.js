// src/Components/FormComponent.js
import React from 'react';

function FormComponent(props) {
  const {
    firstName,
    lastName,
    age,
    gender,
    destination,
    lactoseFree
  } = props.data;

  return (
    <form onSubmit={props.handleSubmit}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>React Travel Form</h2>

      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={firstName}
        onChange={props.handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        onChange={props.handleChange}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Age"
        name="age"
        value={age}
        onChange={props.handleChange}
        style={inputStyle}
      />

      <div style={labelStyle}>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={props.handleChange}
          /> Male
        </label>
        &nbsp;&nbsp;
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={props.handleChange}
          /> Female
        </label>
      </div>

      <label style={labelStyle}>Destination:</label>
      <select
        name="destination"
        value={destination}
        onChange={props.handleChange}
        style={inputStyle}
      >
        <option value="">-- Please Choose --</option>
        <option value="Japan">Japan</option>
        <option value="France">France</option>
        <option value="Brazil">Brazil</option>
        <option value="Morocco">Morocco</option>
      </select>

      <label style={labelStyle}>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={lactoseFree}
          onChange={props.handleChange}
        /> Lactose Free
      </label>

      <button type="submit" style={submitButtonStyle}>Submit</button>

      <hr />

      <div style={{
        backgroundColor: "#e0e0e0",
        padding: "15px",
        borderRadius: "5px",
        marginTop: "20px"
      }}>
        <h3 style={{ marginBottom: "10px" }}>Entered Information:</h3>
        <p><strong>Name:</strong> {firstName} {lastName}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Lactose Free:</strong> {lactoseFree ? "Yes" : "No"}</p>
      </div>
    </form>
  );
}

// Styles
const inputStyle = {
  display: "block",
  width: "100%",
  marginBottom: "15px",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const labelStyle = {
  display: "block",
  marginBottom: "10px",
  fontSize: "16px",
  color: "#444"
};

const submitButtonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "15px"
};

export default FormComponent;
