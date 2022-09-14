import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersData = () => {
  const [usersData, setUsersData] = useState([]);

  const getData = async () => {
    axios
      .get("http://localhost:8080/Users")
      .then((res) => {
        setUsersData(res.data);
        console.log(usersData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="table-div w-50">
      <div className="table-title">Users Details</div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((e) => {
            return (
              <tr key={e.id}>
                <th scope="row">{e.id}</th>
                <td>{e.first_name}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersData;
