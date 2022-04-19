import React from "react";
import Input from "./input";

function Form() {
  return (
    <form className="form">
      <Input type="text" placename="Username"></Input>
      <Input type="text" placename="Password"></Input>
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
