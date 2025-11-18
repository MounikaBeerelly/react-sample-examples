import React from "react";
import Counter from "./Components/Countercomponent";
import Count from "./Components/CountComponent";
import UserListComponent from "./Components/UserListComponent";
import AddUserComponent from "./Components/AddUserComponent";

function App() {
  return (
    <div>
      <AddUserComponent />
      <UserListComponent />
      <hr />
      <Count />
      <Counter />
    </div>
  );
}

export default App;
