import React, { useState, useEffect } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const PICS = ["pencils.jpg", "flower.jpg", "play_outside.jpg"];
const ImageChangeOnScroll = () => {
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseEventCnt, setMouseEventCnt] = useState(0);

  useEffect(() => {
    window.document.title = `SpeakerId: ${currentSpeakerId}`;
    console.log(`useEffect: setting title to : ${currentSpeakerId}`);
  }, [currentSpeakerId]);
  return (
    <div>
      <span>mouseEventCnt: {mouseEventCnt}</span>
      {PICS.map((picsID) => {
        return (
          <div
            key={picsID}
            onMouseOver={() => {
              setCurrentSpeakerId(picsID);
              setMouseEventCnt(mouseEventCnt + 1);
              console.log(`onMouseOver: ${picsID}`);
            }}
          >
            <ImageToggleOnScroll
              primaryImg={`/static/pics/bw/${picsID}`}
              secondaryImg={`/static/pics/${picsID}`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
