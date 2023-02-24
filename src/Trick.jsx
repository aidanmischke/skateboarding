import React, { useState } from "react";
import { Note } from "./note";
import { NoteBackground } from "./note-background";
import TrickNotes from "./resources/trick-notes.json";

export const Trick = (props) => {
  const [showDemo, setShowDemo] = useState(false);

  const polaroidPath = props.polaroid;

  let polaroidName = polaroidPath.replace("/skateboarding/static/media/", "");
  polaroidName = polaroidName.replace(/\..+/, "");

  const noteText = TrickNotes[props.name];
  const noteLength = noteText.length;
  const noteLines = [];

  for (let i = 0; i < noteLength; i++) {
    noteLines.push(<p key={i}>{noteText[i]}</p>);
  }

  return (
    <div>
      <div
        className="image-stack"
        onMouseEnter={() => setShowDemo(true)}
        onMouseLeave={() => setShowDemo(false)}
      >
        <div className={"stack-2-polaroid-frame"}>
          <img src={props.polaroid} alt={"polaroid photo of " + props.name} />
        </div>

        <div className="stack-1-trick-still-and-demo">
          <img
            src={showDemo ? props.demo : props.still}
            alt={props.name + " trick"}
          />
        </div>

        {props.source}

        <span
          className="trickLabel stack-3-trick-label"
          style={{
            fontFamily: "Impact Label",
            fontWeight: "normal",
            fontSize: "140%",
          }}
        >
          {props.name}
        </span>

        <Note
          noteLines={noteLines}
        ></Note>
        
        <NoteBackground
          noteLines={noteLines}
          noteBackground={props.noteBackground}
          noteTape={props.noteTape}
        ></NoteBackground>

      </div>
    </div>
  );
};

export default Trick;