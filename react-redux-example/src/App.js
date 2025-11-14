import React from "react";
import Counter from "./Components/Countercomponent";
import Count from "./Components/CountComponent";
import UserListComponent from "./Components/UserListComponent";

function App() {
  return (
    <div>
      <UserListComponent />
      <Count />
      <Counter />
    </div>
  );
}

export default App;
