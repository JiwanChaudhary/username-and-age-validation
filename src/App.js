// import { useState } from "react";
import "./App.css";
// import UserData from "./components/UserData";
import UserAge from "./components/UserAge";
import AddUser from "./components/AddUser";

function App() {
  // const [username, setUsername] = useState(UserData);
  return (
    <>
      <AddUser />
      <UserAge />
    </>
  );
}

export default App;
