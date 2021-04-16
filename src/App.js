import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import ServicePage from "./Components/ServicePage/Service/ServicePage";
import LogIn from "./Components/LogIn/LogIn/LogIn";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/LogIn/PrivateRoute/PrivateRoute";
import UserReview from "./Components/Dasboard/UserDashboard/UserReview/UserReview";
import AdminDashBoard from "./Components/Dasboard/AdminDashboard/AddAmin/AdminDashBoard";
import AddAdmin from "./Components/Dasboard/AdminDashboard/AddAmin/AddAdmin";
import BookingService from "./Components/Dasboard/UserDashboard/BookingService";
import OrderList from "./Components/Dasboard/AdminDashboard/OrderList/OrderList";
import BookingList from "./Components/Dasboard/UserDashboard/BookingList/BookingList";

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
          <Route exact path="/service">
            <ServicePage />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/review">
            <UserReview />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/BookingService/:id">
            <BookingService />
          </PrivateRoute>
          <PrivateRoute path="/BookingService/:id">
            <BookingService />
          </PrivateRoute>
          <PrivateRoute path="/BookingService">
            <BookingService />
          </PrivateRoute>
          <PrivateRoute path="/adminDashboard">
            <AdminDashBoard />
          </PrivateRoute>
        </Switch>
      </Router>
    </myContext.Provider>
  );
}

export default App;
