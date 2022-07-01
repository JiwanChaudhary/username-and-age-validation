import React from "react";
import UserData from "./UserData";

const UserAge = () => {
  return (
    <div>
      {UserData.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.user}</p>
            <p>{data.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserAge;
