import "./App.css";
import { useState } from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [textStyle, setTextStyle] = useState("");
  console.log(text);

  const stylingBoxes = stylings.map((style) => (
    <button
      onClick={() => setTextStyle(style)}
      className="btn btn-light"
      style={styles[style]}
      key={style}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      onClick={() => setTextColor(color)}
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea
        style={{
          color: textColor,
          fontWeight: textStyle,
          fontStyle: textStyle,
          textDecorationLine: textStyle,
        }}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
