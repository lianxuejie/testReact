import React from "react";
import { 
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom';

import config from './config'

const GetRoutes = () => {
  const routes = useRoutes(config);
  return routes;
}

const SetRoutes = () => {
  return (
    <Router>
      <GetRoutes />
    </Router>
  )
}

export default SetRoutes
