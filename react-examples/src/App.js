import React from 'react';
import CounterComponent from './Components/counterComponent';
import FetchUsersComponent from './Components/FetchUsersComponent';
import FormComponent from './Components/FormComponent';
import ConditionalRenderingComponent from './Components/ConditionalRenderingComponent';

const App = () => {
  return (
    <div>
      <h1>Hello React...</h1>
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
