import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-qwam0pm8hqpp05ts.us.auth0.com"
    clientId="YaDoPmdpImRqsxaJdLONDolBF4kygbD2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);