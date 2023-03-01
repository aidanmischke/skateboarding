import React from "react";
import { Trick } from "./trick.jsx";
import { Source } from "./source.jsx";
import TrickOrder from "./resources/trick-order.json";
import TrickParams from "./resources/trick-params.json";

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

  function getImagesWithPrefix(object, imagePrefix) {
    let images = {};
    for (const property in object) {
      if (property.includes(imagePrefix)) {
        images[property] = object[property];
      }
    }
    return images;
  }

  const polaroids = getImagesWithPrefix(images, "polaroid-");
  const noteTape = getImagesWithPrefix(images, "tape-");

  const trickCount = TrickOrder.Order.length;

  const tricks = [];

  for (let i = 0; i < trickCount; i++) {
    const trickName = TrickOrder.Order[i];
    const trickParams = TrickParams[trickName];

    tricks.push(
      <Trick
        key={i}
        name={trickName}
        polaroids={polaroids}
        still={images[trickParams.still]}
        demo={images[trickParams.demo]}
        noteBackground={images["note-background"]}
        noteTape={noteTape}
        source={<Source url={trickParams.source}></Source>}
      ></Trick>
    );
  }

  return <div>{tricks}</div>;
};
