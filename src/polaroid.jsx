import React, { useCallback, useEffect, useState } from "react";

export const Polaroid = (props) => {
  // Load images only once via useCallback, useEffect, useState
  // https://codesandbox.io/s/admiring-breeze-6wyfui?file=/src/ImageGrid.js

  const [polaroidImages, setPolaroidImages] = useState();


  const getPolaroid = useCallback(() => {
    const polaroids = props.polaroids;
    const polaroidCount = Object.keys(polaroids).length;

    const getRandomPolaroid = () => {
      const randomInt = randomIntFromInterval(1, polaroidCount);
      return polaroids["polaroid-" + randomInt];
    };

    let randomPolaroid = [];

    for (let i = 0; i < 1; i++) {
      randomPolaroid.push(getRandomPolaroid());
    }

    setPolaroidImages(randomPolaroid);
  }, [setPolaroidImages, props.polaroids]);
  
  useEffect(() => {
    getPolaroid();
  }, [getPolaroid]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // const rotateClasses = [
  //   "level",
  //   "rotate-cw",
  //   "rotate-ccw",
  // ];

  // const flipClasses = [
  //   "regular",
  //   "img-hor",
  //   "img-vert",
  //   "img-hor-vert",
  // ];

  // function getRandomPolaroidClasses() {
  //   let classes = "";
  //   classes += rotateClasses[randomIntFromInterval(0, (rotateClasses.length -1))];
  //   classes += " ";
  //   classes += flipClasses[randomIntFromInterval(0, (flipClasses.length -1))];
  //   return classes;
  // }

  // const [polaroidClass, setPolaroidClass] = useState();

  // const getPolaroidClass = useCallback(() => {
  //   const polaroidClasses = getRandomPolaroidClasses();
  //   setPolaroidClass(polaroidClasses);
  // }, [setPolaroidClass]);  

  // useEffect(() => {
  //   getPolaroidClass();
  // }, [getPolaroidClass]);

  return (
    <div className={"stack-4-polaroid-frame"}>
      {polaroidImages ? (
        polaroidImages.map((polaroid) => (
          <img 
            src={polaroid}
            alt=""
            loading="lazy"
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>

  );
};

export default Polaroid;
