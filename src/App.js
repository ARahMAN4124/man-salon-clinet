import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import ServicePage from "./Components/ServicePage/Service/ServicePage";
import LogIn from "./Components/LogIn/LogIn/LogIn";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/LogIn/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dasboard/UserDashboard/UserDashborad";

export const myContext = createContext();

function App() {
  const [logInUser, setLogInUser] = useState({});
  return (
    <myContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/service">
            <ServicePage />
          </PrivateRoute>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </myContext.Provider>
  );
}

export default App;
