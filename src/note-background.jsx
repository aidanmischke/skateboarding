import React from "react";

export const NoteBackground = (props) => {

    const noteBackgrounds = props.noteBackgrounds;
    const noteLines = props.noteLines;
    const noteLineCount = noteLines.length;
    const lineCharLimit = 35;
    const heightMultiplier = 1.1;
    let noteBackgroundHeight = 0;

    for (let i = 0; i < noteLineCount; i++) {
        const charLength = noteLines[i].props.children.length;
        
        noteBackgroundHeight += (Math.ceil(charLength / lineCharLimit)) * heightMultiplier;
    }

    //console.log("noteBackgroundHeight: " + noteBackgroundHeight);

    const noteName = "note-" + Math.ceil(noteBackgroundHeight);

    return (
      <div className="stack-3-note-background">
        { <img src={noteBackgrounds[noteName]} /> }
      </div>
    );
};

export default NoteBackground;