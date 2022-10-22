import React from "react";

import { Redirect, Route } from "react-router-dom";

export const IsLoggedIn = ({ component: Component, ...restOfProps }) => {
  const { redirectTo, isAuth } = restOfProps;
  return (
    <Route
      {...restOfProps}
      render={(props) => (isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />)}
    />
  );
};

export const IsLoggedOut = ({ component: Component, ...restOfProps }) => {
  const { redirectTo, isAuth } = restOfProps;
  return (
    <Route
      {...restOfProps}
      render={(props) => (!isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />)}
    />
  );
};
