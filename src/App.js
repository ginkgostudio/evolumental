import React from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/authentication/SignIn'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />  
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
