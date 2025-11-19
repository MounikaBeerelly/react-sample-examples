import React from "react";
import { BrowserRouter } from "react-router-dom";
import CounterComponent from "./Components/counterComponent";
import FetchUsersComponent from "./Components/FetchUsersComponent";
import FormComponent01 from "./Components/FormComponent";
import ConditionalRenderingComponent from "./Components/ConditionalRenderingComponent";
import ParentComponent from "./Components/Parent-Child/ParentComponent";
import ToggleComponent from "./Components/ToggleComponent";
import SearchBarComponent from "./Components/SearchbarComponent";
import DropdownMenuComponent from "./Components/DropdownMenuComponent";
import TabsComponent from "./Components/TabsComponent";
import FormComponent02 from "./Components/FormComponent/FormComponent";
import RoutingComponent from "./React-Routing/Routing";
import ChatApp from "./Chatbot/ChatApp";

const App = () => {
  return (
    <div>
      <h1>Hello React...</h1>
      <ChatApp />
      {/* <BrowserRouter>
        <RoutingComponent />
      </BrowserRouter>
      <hr />
      <div>
        <FormComponent02 />
        <hr />
        <TabsComponent />
        <hr />
        <DropdownMenuComponent />
        <hr />
        <SearchBarComponent />
        <hr />
        <ToggleComponent />
        <hr />
        <ParentComponent />
        <hr />
        <CounterComponent />
        <hr />
        <FetchUsersComponent />
        <hr />
        <FormComponent01 />
        <hr />
        <ConditionalRenderingComponent />
      </div> */}
    </div>
  );
};

export default App;
