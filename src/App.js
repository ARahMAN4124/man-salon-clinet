import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import ServicePage from "./Components/ServicePage/Service/ServicePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/service">
            <ServicePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
