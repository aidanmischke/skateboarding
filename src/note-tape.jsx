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

  return (
    <div className="stack-4-note-tape">
      {noteTapeImages ? (
        noteTapeImages.map((tape) => (
          <img src={tape} alt={"foobar"} style={{ margin: "-10% 0% 0% 0%", maxHeight: "35px" }} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NoteTape;
