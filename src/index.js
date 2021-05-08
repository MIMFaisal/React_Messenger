import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";
import { Provider } from "react-redux";
import store from "./store";

const firebaseConfig = {
  apiKey: proces.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: proces.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: proces.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: proces.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: proces.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: proces.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: proces.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

// window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
