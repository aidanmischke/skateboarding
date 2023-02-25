import React from "react";

export const NoteBackground = (props) => {
  const noteBackground = props.noteBackground;
  const noteLines = props.noteLines;
  const noteLineCount = noteLines.length;
  const lineCharLimit = 45;
  const heightMultiplier = 0.9;
  const multipleLineMultiplier = 0.4;
  const pixelMultiplier = 40;
  const styleMaxHeight = "400px";
  let noteBackgroundHeight = 0;

  for (let i = 0; i < noteLineCount; i++) {
    const charLength = noteLines[i].props.children.length;
    noteBackgroundHeight += heightMultiplier;
    noteBackgroundHeight +=
      Math.round(charLength / lineCharLimit) * multipleLineMultiplier;
  }

  const noteHeight = Math.ceil(noteBackgroundHeight) * pixelMultiplier;
  const styleHeight = noteHeight + "px";

  return (
    <div className="stack-1-note-background">
      <img
        src={noteBackground}
        style={{ height: styleHeight, maxHeight: styleMaxHeight }}
      />
    </div>
  );
};

export default NoteBackground;
