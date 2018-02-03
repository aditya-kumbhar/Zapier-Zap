import React from "react";
import Signup from "./form/Signup";
import "./Article.css";

const Article = props => {
  return (
    <div className="page__section page__section__article" id="login">
      <h4 className="page__section__article--title">Sign up | T81PF</h4>

      <Signup />
    </div>
  );
};

export default Article;
