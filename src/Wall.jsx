import React from "react";
import { Trick } from "./Trick.jsx";
import { Note } from "./Note";
import TrickNotes from "./resources/trick-notes.json";

export const Wall = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      let name = r(item).replace("./", "");
      name = r(item).replace("/skateboarding/static/media/", "");
      name = name.replace(/\..+/, "");
      // console.log(name);
      images[name] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("./resources", true, /\.(png|jpe?g|gif)$/)
  );

  return (
    <div>
      <Trick
        name="Feeble Stall"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["feeble-stall-still"]}
        demo={images["feeble-stall-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>
      <Trick
        name="FS Grab"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["fs-grab-still"]}
        demo={images["fs-grab-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>
      <Trick
        name="Manual"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["manual-still"]}
        demo={images["manual-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>
      <Trick
        name="Rock and Roll"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["rock-and-roll-still"]}
        demo={images["rock-and-roll-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>
      <Trick
        name="Tail Stall Nose Grab"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["tail-stall-nose-grab-still"]}
        demo={images["tail-stall-nose-grab-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>
      <Trick
        name="Staple Gun"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["staple-gun-still"]}
        demo={images["staple-gun-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>
      <Trick
        name="Slash Grind"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["slash-grind-still"]}
        demo={images["slash-grind-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>

      <Trick
        name="Nose Stall Revert"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["nose-stall-revert-still"]}
        demo={images["nose-stall-revert-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>

      <Trick
        name="Lipslide"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["lipslide-still"]}
        demo={images["lipslide-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>

      <Trick
        name="Falling"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["falling-still"]}
        demo={images["falling-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>

      <Trick
        name="Fakie Tail Stall"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["fakie-tail-stall-still"]}
        demo={images["fakie-tail-stall-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>

      <Trick
        name="Fakie Half Cab Rock"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["fakie-half-cab-rock-still"]}
        demo={images["fakie-half-cab-rock-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>

      <Trick
        name="5-0 Stall"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["5-0-stall-still"]}
        demo={images["5-0-stall-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>

      {/* 
      <Trick
        name=""
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["-still"]}
        demo={images["-demo"]}
        notes={<Note note={TrickNotes["Pushing"]}></Note>}
        noteBackground={images["note-2"]}
      ></Trick>
       */}

      <Trick
        name="Rock to Fakie"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["rock-to-fakie-still"]}
        demo={images["rock-to-fakie-demo"]}
        notes={<Note note={TrickNotes["Rock-to-Fakie"]}></Note>}
        noteBackground={images["note-1"]}
      ></Trick>
      <Trick
        name="50-50 Grind"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["50-50-grind-still"]}
        demo={images["50-50-grind-demo"]}
        notes={<Note note={TrickNotes["50-50-Grind"]}></Note>}
        noteBackground={images["note-3"]}
      ></Trick>
      <Trick
        name="Roll In"
        polaroid={images["polaroid-stained-taped-corners"]}
        thumb={images["roll-in-still"]}
        demo={images["roll-in-demo"]}
        notes={<Note note={TrickNotes["Roll-In"]}></Note>}
        noteBackground={images["note-1"]}
      ></Trick>
    </div>
  );
};
