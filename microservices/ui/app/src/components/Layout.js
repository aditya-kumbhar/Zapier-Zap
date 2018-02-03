import React, { Component } from "react";
import "./Layout.css";
import Home from "./sections/home/Home";
import Article from "./sections/Article";

class Layout extends Component {
  render() {
    return (
      <div className="page__home">
        <Article />
      </div>
    );
  }
}

export default Layout;
