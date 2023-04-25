import React from "react";
import { Polaroid } from "./polaroid";
import { Note } from "./note";
import { NoteBackground } from "./note-background";
import NoteTape from "./note-tape";
import TrickNotes from "./resources/trick-notes.json";

export const Trick = (props) => {
  // const [showDemo, setShowDemo] = useState(false);

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
        // onMouseEnter={() => setShowDemo(true)}
        // onMouseLeave={() => setShowDemo(false)}
      >
        <Polaroid
          polaroids={props.polaroids}
        ></Polaroid>

        {/* style={showDemo ? {zIndex: 0} : {zIndex: 1}} */}
        <div className="stack-1-trick-still">
          <img
            src={props.still}
            alt={props.name + " trick"}
            loading="lazy"
          />
        </div>

        {/* style={showDemo ? {zIndex: 1} : {zIndex: 0}} */}
        <div className="stack-0-trick-demo">
          <img
            src={props.demo}
            alt={props.name + " trick"}
            loading="lazy"
          />
        </div>

        {props.source}

        <span
          className="trickLabel stack-5-trick-label"
          style={{
            fontFamily: "Impact Label",
            fontWeight: "normal",
            fontSize: "140%",
          }}
        >
          {props.name}
        </span>

        <Note noteLines={noteLines}></Note>

        <NoteTape noteTape={props.noteTape}></NoteTape>

        <NoteBackground
          noteBackground={props.noteBackground}
          noteLines={noteLines}
        ></NoteBackground>
      </div>
    </div>
  );
};

export default Trick;
