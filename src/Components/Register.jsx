import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState([]);

  function handleInput(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/Users", data)
      .then((res) => {
        alert("User added successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-div w-50">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
