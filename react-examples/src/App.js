import React from 'react';
import CounterComponent from './Components/counterComponent';
import FetchUsersComponent from './Components/FetchUsersComponent';
import FormComponent from './Components/FormComponent';
import ConditionalRenderingComponent from './Components/ConditionalRenderingComponent';
import ParentComponent from './Components/Parent-Child/ParentComponent';
import ToggleComponent from './Components/ToggleComponent';
import SearchBarComponent from './Components/SearchbarComponent';
import DropdownMenuComponent from './Components/DropdownMenuComponent';
import TabsComponent from './Components/TabsComponent';
import FormikComponent from './Components/FormComponent/FormComponent';
import RoutingComponent from './React-Routing/Routing';

const App = () => {
  return (
    <div>
      <h1>Hello React...</h1>
      <RoutingComponent />
      <br />
      <hr />
      <FormikComponent />
      <hr/>
      <TabsComponent />
      <hr />
      <DropdownMenuComponent />
      <hr/>
      <SearchBarComponent />
      <hr/>
      <ToggleComponent />
      <hr/>
      <ParentComponent />
      <hr/>
      <CounterComponent />
      <hr/>
      <FetchUsersComponent />
      <hr/>
      <FormComponent />
      <hr/>
      <ConditionalRenderingComponent />
    </div>
  );
}

export default App;
