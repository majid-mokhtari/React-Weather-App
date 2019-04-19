import React from "react";
import { render } from "react-dom";
import { configureStore, history } from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes/index";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const store = configureStore();

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

render(
  <Root store={store} history={history} />,
  document.getElementById("root")
);

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  window.addEventListener("load", function() {
    registerServiceWorker();
  });
}
