import React from "react";
import ReactDOM from 'react-dom/client'
import TestComponent from './test.jsx';
import BasicLayout from "./routes/AppRouter.js";

// https://juejin.cn/post/6844904035099623437#heading-21
const App = () => {
  return (
    <BasicLayout></BasicLayout>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
