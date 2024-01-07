import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeColor] = useState("hex");
  const [randomColor, setRandomColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function setRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);
    setRandomColor(hexColor);
    setTypeColor('hex')
  }

  function setRandomRGBColor() {
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);
    setRandomColor(`rgb(${r},${g},${b})`);
    setTypeColor('rgb')
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: randomColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: "10px",
      }}
    >
      <button onClick={setRandomHexColor}>Generate HEX Color</button>
      <button onClick={setRandomRGBColor}>Generate RGB Color</button>
      <button
        onClick={typeOfColor === "hex" ? setRandomHexColor : setRandomRGBColor}
      >
        Generate Random Color
      </button>
      <p>Color Type: {typeOfColor === "rgb" ? "rgb color" : "hex color"}</p>
      <h1>{randomColor}</h1>
    </div>
  );
}
