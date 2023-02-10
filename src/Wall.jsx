import React from "react";
import { Trick } from "./Trick.jsx";
import { Source } from "./Source.jsx";
import { Note } from "./Note";
import TrickOrder from "./resources/trick-order.json";
import TrickParams from "./resources/trick-params.json";
import TrickNotes from "./resources/trick-notes.json";

export const Wall = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      let name = r(item).replace("/skateboarding/static/media/", "");
      name = name.replace(/\..+/, "");
      images[name] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("./resources", true, /\.(png|jpe?g|gif)$/)
  );

  const trickCount = TrickOrder.Order.length;

  const tricks = [];

  for (let i = 0; i < trickCount; i++) {
    const trickName = TrickOrder.Order[i];
    const trickParams = TrickParams[trickName];

    tricks.push(
      <Trick
        key={i}
        name={trickName}
        polaroid={images[trickParams.polaroid]}
        still={images[trickParams.still]}
        demo={images[trickParams.demo]}
        notes={<Note note={TrickNotes[trickName]}></Note>}
        noteBackground={images[trickParams.noteBackground]}
        source={<Source url={trickParams.source}></Source>}
      ></Trick>
    );
  }

  return <div>{tricks}</div>;
};
