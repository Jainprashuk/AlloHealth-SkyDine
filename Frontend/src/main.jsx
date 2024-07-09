import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";
import StarterPage from "./Pages/StarterPage.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <Auth0Provider
      domain="dev-jcknc2ydq87meifz.us.auth0.com"
      clientId="c2WFiXArhyGzMXbHuHBOw8M5KATxMuvA"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        {/* <App /> */}
        {/* <StarterPage/>  */}
        <LoginSignup />
      </Provider>
    </Auth0Provider>
);
