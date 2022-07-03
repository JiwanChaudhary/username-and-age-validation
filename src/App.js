import { useState } from "react";
import "./App.css";
import UserData from "./components/UserData";
import AddUser from "./components/AddUser";
import { v4 as uuidv4 } from "uuid";
import UserAgeList from "./components/UserAgeList";

function App() {
  const [username, setUsername] = useState(UserData);

  function handleUserAge(user) {
    user.id = uuidv4();
    setUsername([...username, user]);
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure, you want to delete?")) {
      setUsername(
        username.filter((user) => {
          return user.id !== id;
        })
      );
    }
  }

  return (
    <>
      <AddUser addUserAge={handleUserAge} />
      <UserAgeList userAgeL={username} deleteUser={handleDelete} />
    </>
  );
}

export default App;
