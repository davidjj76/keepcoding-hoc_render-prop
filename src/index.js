import React from 'react';
import ReactDOM from 'react-dom';

import Planets from './Planets';

function App() {
  return (
    <div className="App">
      <Planets sort={(p1, p2) => p1.name.localeCompare(p2.name)} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
