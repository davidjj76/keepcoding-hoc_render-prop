import React from 'react';
import ReactDOM from 'react-dom';

import Planets from './Planets';

function App() {
  return (
    <div className="App">
      <Planets />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
