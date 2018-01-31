import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/normalize.css";
import "./index.css";
import App from "./App";
import axios from "axios";
import registerServiceWorker from "./registerServiceWorker";
//https://api.belligerently39.hasura-app.io
axios.defaults.baseURL = "https://ui.asthmatic70.hasura-app.io/";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render( < App / > , document.getElementById("root"));
registerServiceWorker();