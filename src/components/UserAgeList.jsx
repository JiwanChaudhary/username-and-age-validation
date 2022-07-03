import React from "react";

const UserAgeList = ({ userAgeL }) => {
  return (
    <div>
      {userAgeL.map((user) => {
        return (
          <div key={user.id}>
            <p>Hello, this is {user.user}</p>
            <p>My age is: {user.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserAgeList;
