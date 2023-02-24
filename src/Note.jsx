import React from "react";

export const Note = (props) => {
  return (
    <div
      className={`trickNotes stack-4-note-text`}
      style={{
        fontFamily: "JMH Typewriter dry Bold",
        fontWeight: "normal",
        fontSize: "90%",
      }}
    >
      {props.noteLines}
    </div>
  );
};

export default Note;
