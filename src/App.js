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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import MyOrders from './components/MyOrders/MyOrders';
import ManageBookings from './components/ManageBookings/ManageBookings';
import AddOffer from './components/AddOffer/AddOffer';
import NewsDetail from './components/NewsDetail/NewsDetail';
import Faq from './components/Faq/Faq';
import About from './components/About/About';

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
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/mybookings'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/managebookings'>
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path='/addoffer'>
              <AddOffer></AddOffer>
            </PrivateRoute>
            <Route path='/news'>
              <NewsDetail></NewsDetail>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/faq'>
              <Faq></Faq>
            </Route>
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
