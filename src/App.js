import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Appoinment from "./component/Appoinment/Appoinment";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import NotFound from "./component/NotFound/NotFound";
import Register from "./component/Register/Register";
import Service from "./component/Services/Service";

import Services from "./component/Services/Services";

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
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/aboutUs">
            <About></About>
          </Route>
          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

          <Route exact path="/service/:serviceName">
            <Service></Service>
          </Route>
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
