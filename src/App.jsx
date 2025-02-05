import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const colors = ["white", "red", "blue", "green", "yellow", "purple", "pink","skyblue","DeepPink","Fuchsia","Navy"];

  return (
    <div
      className="flex flex-col items-center justify-end min-h-screen p-4"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-xl font-bold mb-4">Change Background Color</h2>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            className="px-4 py-2 rounded shadow-md text-black font-semibold border border-white/30"
            style={{ backgroundColor: color }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;