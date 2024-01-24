import React from "react";

export default function Success(props) {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {props.title}
      </div>
    </div>
  );
}
