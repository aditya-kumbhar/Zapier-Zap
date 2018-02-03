import React from "react";
import "./Home.css";

const home = props => {
  return (
    <div className="page__section page__section--home">
      <h1 className="page__title">Books</h1>
      <p>Buy and sell old books</p>
      <a href="#login" className="button button--login">
        Log in/Sign up
      </a>
      <a href="/" className="page__section__icon" alt="logo" />
    </div>
  );
};

export default home;
