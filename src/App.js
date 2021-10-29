import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import AuthProvider from './components/Context/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;