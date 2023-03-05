import React from "react";

export const Source = (props) => {
  if (props.url !== undefined) {
    return (
      <span
        className="stack-5-trick-source"
        style={{
          fontFamily: "Impact Label",
          fontWeight: "normal",
          fontSize: "85%",
        }}
      >
        <a href={props.url} target="_blank">
          Source
        </a>
      </span>
    );
  } else {
    return null;
  }
};

export default Source;
