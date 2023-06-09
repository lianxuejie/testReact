import React from "react";
import ReactDOM from 'react-dom/client'
import TestComponent from './test.jsx';

const App = () => {
  return (
    <div>react test 1111</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
