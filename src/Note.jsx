import React from "react";

export const Note = (props) => {
  const note = props.note;
  const length = note.length;
  const lines = [];

  for (let i = 0; i < length; i++) {
    lines.push(<p key={i}>{note[i]}</p>);
  }

  return <div>{lines}</div>;
};

export default Note;
