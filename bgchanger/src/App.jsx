import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
      <div
          style={{
            backgroundColor: color,
            minHeight: "100vh",
            padding: "20px",
          }}
      >
        <h1>Choose a color</h1>

        <button onClick={() => setColor("red")}>
          Red
        </button>

        <button onClick={() => setColor("blue")}>
          Blue
        </button>

        <button onClick={() => setColor("green")}>
          Green
        </button>

        <button onClick={() => setColor("yellow")}>
          Yellow
        </button>
      </div>
  );
}

export default ColorChanger;