import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import AddService from "./component/AddService/AddService";
import PlaceOrder from "./component/Appoinment/PlaceOrder";

import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import NotFound from "./component/NotFound/NotFound";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Register from "./component/Register/Register";
import Service from "./component/Services/Service";

import ManageBookings from "./component/Manage Bookings/ManageBookings";

import MyBookings from "./component/MyBookings/MyBookings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute path="/add-package">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/bookings">
            <ManageBookings></ManageBookings>
          </PrivateRoute>
          <PrivateRoute path="/my-bookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path="/place-order/:_id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

          <PrivateRoute exact path="/package/:packageName">
            <Service></Service>
          </PrivateRoute>
          <Route to="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
