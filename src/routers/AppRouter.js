import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import React from 'react';
import Crud from '../Containers/Crud';
import Error404 from '../Containers/Error404';
import App from '../Containers/App';
//--------------------------------

function AppRouter () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/crud" component={Crud} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  )
}

export default AppRouter;