import React from "react";

export const NoteBackground = (props) => {

    const noteBackground = props.noteBackground;
    const noteLines = props.noteLines;
    const noteLineCount = noteLines.length;
    const lineCharLimit = 33;
    const heightMultiplier = 1.1;
    const multipleLineMultiplier = 0.3;
    const pixelMultiplier = 40;
    const styleMaxHeight = "400px";
    let noteBackgroundHeight = 0;

    for (let i = 0; i < noteLineCount; i++) {
        const charLength = noteLines[i].props.children.length;
        noteBackgroundHeight += heightMultiplier;
        noteBackgroundHeight += (Math.round(charLength / lineCharLimit)) * multipleLineMultiplier;
    }

    const noteHeight = Math.ceil(noteBackgroundHeight) * pixelMultiplier;
    const styleHeight = noteHeight + "px";

    // const random = 

    // const randomNoteTape = noteTape["tape-"]

    return (
      <div className="stack-3-note-background">            
        {/* <img src={} /> */}
        <img src={noteBackground} style={{height: styleHeight, maxHeight: styleMaxHeight}} />
      </div>
    );
};

export default NoteBackground;