import { useState } from "react";
import "./App.css";
import UserData from "./components/UserData";
import UserAge from "./components/UserAge";
import AddUser from "./components/AddUser";
import { v4 as uuidv4 } from "uuid";
import UserAgeList from "./components/UserAgeList";

function App() {
  const [username, setUsername] = useState(UserData);

  function handleUserAge(user) {
    user.id = uuidv4();
    setUsername([...username, user]);
  }

  return (
    <>
      <AddUser addUserAge={handleUserAge} />
      <UserAge />
      <UserAgeList userAgeL={username} />
    </>
  );
}

export default App;
