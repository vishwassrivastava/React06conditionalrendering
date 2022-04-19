import React from "react";
import Form from "./form.jsx";

var isLoggedIn = false;
function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Form></Form>;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
