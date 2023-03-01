import React from "react";

export const Source = (props) => {
  if (props.url !== undefined) {
    return (
      <span
        className="trickSource stack-5-trick-source"
        style={{
          fontFamily: "Impact Label",
          fontWeight: "normal",
          fontSize: "138%",
        }}
      >
        <a href={props.url} target="_blank">
          S o u r c e
        </a>
      </span>
    );
  } else {
    return null;
  }
};

export default Source;
