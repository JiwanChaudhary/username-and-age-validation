import React from "react";
import { useState } from "react";

const AddUser = ({ addUserAge }) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");

  const handleInputChange = (e) => {
    setUser(e.target.value);
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUserAge({ user, age });
    setUser("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Enter User</label>
        <input
          type="text"
          id="user"
          placeholder="Write name"
          onChange={handleInputChange}
          value={user}
        />
        <label htmlFor="age">Enter Age</label>
        <input
          type="number"
          id="age"
          placeholder="Write age"
          onChange={handleInputChange}
          value={age}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
