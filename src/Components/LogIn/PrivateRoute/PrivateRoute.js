import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { myContext } from "../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [logInUser, setLogInUser] = useContext(myContext);
  return (
    <section>
      <Route
        {...rest}
        render={({ location }) =>
          logInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </section>
  );
};

export default PrivateRoute;
