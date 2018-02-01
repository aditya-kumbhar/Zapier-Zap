import React, { Component } from "react";
import Layout from "./components/Layout";
import "./App.css";
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
