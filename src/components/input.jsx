import React from "react";

function Input(props) {
  return (
    <div>
      <input type={props.text} placeholder={props.placename} />
    </div>
  );
}

export default Input;
