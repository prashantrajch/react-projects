import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("Black");

  const buttons = [
    "Red",
    "Green",
    "Blue",
    "Olive",
    "Gray",
    "Yellow",
    "Pink",
    "Purple",
    "Lavender",
    "White",
    "Black",
  ];

  const checkButtonColor = (color) => {
    if (
      color == "Pink" ||
      color == "White" ||
      color == "Yellow" ||
      color == "Lavender"
    ) {
      return "text-black";
    } else {
      return "text-white";
    }
  };

  return (
    <div
      className="h-screen w-full transition-colors ease-linear"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 px-2 flex justify-center flex-wrap">
        <div className="bg-white/85 rounded-3xl px-3 py-2 shadow-lg flex flex-wrap gap-3">
          {buttons.map((buttonName) => (
            <button
              key={buttonName}
              className={`px-4 py-1 rounded-full cursor-pointer shadow-2xl ${checkButtonColor(buttonName)}`}
              style={{ backgroundColor: buttonName }}
              onClick={() => setColor(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
