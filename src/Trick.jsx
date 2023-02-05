import React, { useState } from "react";

export const Trick = (props) => {
  const [showDemo, setShowDemo] = useState(false);

  const polaroidPath = props.polaroid;

  let polaroidName = polaroidPath.replace("/skateboarding/static/media/", "");
  polaroidName = polaroidName.replace(/\..+/, "");

  const noteBackgroundPath = props.noteBackground;

  let noteBackgroundName = noteBackgroundPath.replace("/skateboarding/static/media/", "");
  noteBackgroundName = noteBackgroundName.replace(/\..+/, "");

  return (
    <div>
      <div
        className="image-stack"
        onMouseEnter={() => setShowDemo(true)}
        onMouseLeave={() => setShowDemo(false)}
      >
        <div className={`stack-2-polaroid-frame ${polaroidName}`}>
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

        <div
          className={`trickNotes stack-4-note-text ${noteBackgroundName}`}
          style={{
            fontFamily: "JMH Typewriter dry Bold",
            fontWeight: "normal",
            fontSize: "90%",
          }}
        >
          {props.notes}
        </div>
        <div className="stack-3-note-background">
          <img src={props.noteBackground} />
        </div>
      </div>
    </div>
  );
};

export default Trick;
