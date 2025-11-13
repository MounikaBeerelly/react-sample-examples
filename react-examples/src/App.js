import React from 'react';
import CounterComponent from './Components/counterComponent';
import FetchUsersComponent from './Components/FetchUsersComponent';
import FormComponent from './Components/FormComponent';

const App = () => {
  return (
    <div>
      <h1>Hello React...</h1>
      <CounterComponent />
      <hr/>
      <FetchUsersComponent />
      <hr/>
      <FormComponent />
    </div>
  );
}

export default App;
