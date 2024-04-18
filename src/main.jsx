import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Auth0Provider
    domain=
    // "https://sdl-preprod.eu.auth0.com"
    "dev-7yx3dod34bd7xsao.us.auth0.com"
    clientId=
    // "E1ERPkKpW5lY8QbeoZeRc7cfeCrnYl1D" //One-web Appln
    "2mUTs7wkfotQ8tbN5evXYJWZ12m4mfK7" //Vedant
    // "Eiv0rRLHh8yTOfXGvJN9vlqVaZUeR1jS"
    // "lB5bnxfLFDhaOlmIhNlElwknZmWsvXjz"
    authorizationParams={{
      // redirect_uri: window.location.origin
      redirect_uri:'http://localhost:5173/dashboard'
    }}
  >
        <App />
    </Auth0Provider>
  </React.StrictMode>
);