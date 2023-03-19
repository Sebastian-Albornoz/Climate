import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './src/main'

const App = () => {
  return (
    <div>
      <Main/>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<App />);