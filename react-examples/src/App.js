import React from 'react';
import CounterComponent from './Components/counterComponent';
import FetchUsersComponent from './Components/FetchUsersComponent';

const App = () => {
  return (
    <div>
      <h1>Hello React...</h1>
      <CounterComponent />
      <hr/>
      <FetchUsersComponent />
    </div>
  );
}

export default App;
