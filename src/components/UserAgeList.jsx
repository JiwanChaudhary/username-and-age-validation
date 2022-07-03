import React from "react";

const UserAgeList = ({ userAgeL, deleteUser }) => {
  return (
    <div className="user">
      {userAgeL.map((user) => {
        return (
          <div key={user.id} className="userAge">
            <p>Hello, this is {user.user}</p>
            <p>My age is: {user.age}</p>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default UserAgeList;
