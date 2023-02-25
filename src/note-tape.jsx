import React, { useCallback, useEffect, useState } from "react";

export const NoteTape = (props) => {
  // Load images only once via useCallback, useEffect, useState
  // https://codesandbox.io/s/admiring-breeze-6wyfui?file=/src/ImageGrid.js

  const [noteTapeImages, setNoteTapeImages] = useState();

  const noteTape = props.noteTape;
  const noteTapeCount = Object.keys(noteTape).length;

  const getTape = useCallback(() => {
    let randomTape = [];

    for (let i = 0; i < 1; i++) {
      randomTape.push(getRandomNoteTape());
    }

    setNoteTapeImages(randomTape);
  }, [setNoteTapeImages]);
  
  useEffect(() => {
    getTape();
  }, [getTape]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomNoteTape() {
    const randomInt = randomIntFromInterval(1, noteTapeCount);
    return noteTape["tape-" + randomInt];
  }

  const rotateClasses = [
    "level",
    "rotate-cw",
    "rotate-ccw",
  ];

  const flipClasses = [
    "regular",
    "img-hor",
    "img-vert",
    "img-hor-vert",
  ];

  function getRandomTapeClasses() {
    let classes = "";
    classes += rotateClasses[randomIntFromInterval(0, (rotateClasses.length -1))];
    classes += " ";
    classes += flipClasses[randomIntFromInterval(0, (flipClasses.length -1))];
    return classes;
  }

  const [tapeClass, setTapeClass] = useState();

  const getTapeClass = useCallback(() => {
    const tapeClasses = getRandomTapeClasses();
    setTapeClass(tapeClasses);
  }, [setTapeClass]);  

  useEffect(() => {
    getTapeClass();
  }, [getTapeClass]);

  return (
    <div className="stack-3-note-tape">
      {noteTapeImages ? (
        noteTapeImages.map((tape) => (
          <img 
            src={tape}
            alt={"foobar"}
            className={tapeClass}
            style={{ margin: "-10% 0% 0% 0%", maxHeight: "40px" }}
            loading="lazy"
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NoteTape;
