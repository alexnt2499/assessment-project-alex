import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { store } from "./store";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import AuthCache from "./components/AuthCache";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <AuthCache>
      <RouterProvider router={router} />
    </AuthCache>
    <ToastContainer
      position="top-center"
      hideProgressBar
      autoClose={1000}
      style={{ color: "#E25148" }}
      transition={Slide}
    />
  </Provider>
);
