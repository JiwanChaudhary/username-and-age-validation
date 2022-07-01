import React from "react";

const AddUser = () => {
  return (
    <div>
      <form>
        <label htmlFor="user">Enter User</label>
        <input type="text" id="user" />
        <label htmlFor="age">Enter Age</label>
        <input type="number" id="age" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
