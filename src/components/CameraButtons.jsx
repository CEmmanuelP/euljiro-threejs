import { useEffect, useState } from "react";
import useSound from "use-sound";
import state from "../state";
import {
  clockStreetDesc,
  ironStreetDesc,
  printStreetDesc,
  sewoonDesc,
  sewoonUrl,
} from "../strings";

const style = {
  zIndex: 1,
  position: "absolute",
  bottom: "40vh",
  height: "30px",
  width: "30px",
  background: "white",
  textAlign: "center",
  borderRadius: "100%",
  fontSize: 20,
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  cursor: "pointer",
};

let count = 0;
let urlBtn;
let desc;
let title;
let description;

export const sets = {
  // 전경
  0: {
    cameraPos: [12, 12, 12],
    target: [0, 0, 0],
  },
  // 세운상가
  1: {
    cameraPos: [-2, 6, 10],
    target: [0, 2, 0],
    url: sewoonUrl,
    img: process.env.PUBLIC_URL + "/images/sewoonImg.jpeg",
    title: "세운상가",
    desc: sewoonDesc,
    sound: process.env.PUBLIC_URL + "/sounds/creativeMinds.mp3",
  },
  // 인쇄골목
  2: {
    cameraPos: [-6.1, 3.6, -6.1],
    target: [-6.7, 2, 0],
  },
  // 철공소
  3: {
    cameraPos: [9.5, 3, 8.8],
    target: [6.5, 1, 6.5],
  },
  // 시계골목
  4: {
    cameraPos: [5, 3, -13],
    target: [4, 2, -8],
  },
};

const CameraButtons = ({ setUrl }) => {
  const [sewoonSound, { stop: stopSewoon }] = useSound(
    process.env.PUBLIC_URL + "/sounds/creativeMinds.mp3"
  );
  const [clockSound, { stop: stopClock }] = useSound(
    process.env.PUBLIC_URL + "/sounds/clockSound.wav"
  );
  const [printSound, { stop: stopPrint }] = useSound(
    process.env.PUBLIC_URL + "/sounds/sewoonSound.mp3"
  );
  const [machineSound, { stop: stopMachine }] = useSound(
    process.env.PUBLIC_URL + "/sounds/psychedelic.mp3"
  );

  useEffect(() => {
    urlBtn = document.getElementById("urlBtn");
    desc = document.getElementById("desc_sewoon");
    title = document.getElementById("desc_title");
    description = document.getElementById("desc_description");
  }, []);

  const handleClick = (num) => {
    console.log(`num: ${num}`);
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.shouldUpdate = true;
  };

  const handleSound = (num) => {
    switch (num) {
      case 0:
        stopSewoon();
        stopClock();
        stopPrint();
        stopMachine();
        break;
      case 1:
        sewoonSound();
        stopPrint();
        stopMachine();
        stopClock();
        break;
      case 2:
        printSound();
        stopMachine();
        stopClock();
        stopSewoon();
        break;
      case 3:
        machineSound();
        stopClock();
        stopSewoon();
        stopPrint();
        break;
      case 4:
        clockSound();
        stopSewoon();
        stopPrint();
        stopMachine();
        break;
      default:
        stopSewoon();
        stopClock();
        stopPrint();
        stopMachine();
        break;
    }
  };

  const handleDescription = (num) => {
    switch (num) {
      case 0:
        urlBtn.classList.remove("active");
        desc.classList.remove("active");
        break;
      case 1:
        title.innerHTML = "세운상가";
        description.innerHTML = sewoonDesc;
        document.getElementById("img").src =
          process.env.PUBLIC_URL + "/images/sewoonImg.jpeg";
        urlBtn.classList.add("active");
        desc.classList.add("active");
        setUrl(sewoonUrl);
        break;
      case 2:
        title.innerHTML = "인쇄골목";
        description.innerHTML = printStreetDesc;
        document.getElementById("img").src =
          process.env.PUBLIC_URL + "/images/steelMachineImg.jpeg";
        urlBtn.classList.add("active");
        desc.classList.add("active");
        break;
      case 3:
        title.innerHTML = "철공소";
        description.innerHTML = ironStreetDesc;
        document.getElementById("img").src =
          process.env.PUBLIC_URL + "/images/ironImg.jpeg";
        urlBtn.classList.add("active");
        desc.classList.add("active");
        break;
      case 4:
        title.innerHTML = "시계골목";
        description.innerHTML = clockStreetDesc;
        document.getElementById("img").src =
          process.env.PUBLIC_URL + "/images/clockImg.jpeg";
        urlBtn.classList.add("active");
        desc.classList.add("active");
        setUrl("http://www.naver.com");
        break;
      default:
        urlBtn.classList.remove("active");
        desc.classList.remove("active");
        break;
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          if (count > 0) {
            count--;
          } else {
            count = 4;
          }
          handleClick(count);
          handleSound(count);
          handleDescription(count);
        }}
        style={{
          left: "2vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => {
          if (count < 4) {
            count++;
          } else {
            count = 0;
          }
          handleClick(count);
          handleSound(count);
          handleDescription(count);
        }}
        style={{
          right: "2vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
