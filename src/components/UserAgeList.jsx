import React from "react";

const UserAgeList = ({ userAgeL }) => {
  return (
    <div>
      {userAgeL.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.user}</p>
            <p>{user.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserAgeList;
