import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/normalize.css";
import "./index.css";
import App from "./App";
import axios from "axios";
import registerServiceWorker from "./registerServiceWorker";

axios.defaults.baseURL = "https://api.belligerently39.hasura-app.io";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
