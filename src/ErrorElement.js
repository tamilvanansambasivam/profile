import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <Header />
      <h1 className="message">
        {" "}
        <span className="oops">Oops!!! 🙀</span>
        <br />
        something went wrong !
      </h1>
    </>
  );
};

export default ErrorElement;
