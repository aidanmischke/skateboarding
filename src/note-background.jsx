import React from "react";

export const NoteBackground = (props) => {

    const noteBackgrounds = props.noteBackgrounds;
    const noteLines = props.noteLines;
    const noteLineCount = noteLines.length;
    const splitLineLimit = 65;
    const heightMultiplier = 1;
    let noteBackgroundHeight = 0;

    for (let i = 0; i < noteLineCount; i++) {
        noteBackgroundHeight += 1;
        if (noteLines[i].props.children.length >= splitLineLimit) {
            noteBackgroundHeight += 2;
        }
    }

    const noteName = "note-" + Math.floor(noteBackgroundHeight * heightMultiplier);

    return (
      <div className="stack-3-note-background">
        { <img src={noteBackgrounds[noteName]} /> }
      </div>
    );
};

export default NoteBackground;