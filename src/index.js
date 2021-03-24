import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { refreshToken } from "./redux/slices/authorizationSlice";

let refresh_token = window.localStorage["refreshToken"];
if (refresh_token !== "undefined" && window.localStorage["refreshToken"]) {
  store.dispatch(refreshToken(refresh_token));
} else {
  console.log("there is no refreshtoken in local storage");
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
