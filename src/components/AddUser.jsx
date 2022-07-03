import React from "react";
import { useState } from "react";

const AddUser = ({ addUserAge }) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");

  const handleInputUser = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };

  const handleInputAge = (e) => {
    setAge(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserAge({ user, age });
    setUser("");
    setAge("");
    console.log(user);
    console.log(age);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Enter User</label>
        <input
          type="text"
          id="user"
          placeholder="Write name"
          onChange={handleInputUser}
          value={user}
        />
        <label htmlFor="age">Enter Age</label>
        <input
          type="number"
          id="age"
          placeholder="Write age"
          onChange={handleInputAge}
          value={age}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
