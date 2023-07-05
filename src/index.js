import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { store } from "./store";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyChOCx1KnWyoERmnDTHvndInCv_Z2CyyME",
  authDomain: "chatapp-688c7.firebaseapp.com",
  projectId: "chatapp-688c7",
  storageBucket: "chatapp-688c7.appspot.com",
  messagingSenderId: "1006060169809",
  appId: "1:1006060169809:web:1ac2d3fb4ff424354be670",
  measurementId: "G-ZWHJTVMT1F"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
