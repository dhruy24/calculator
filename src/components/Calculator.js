import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
<div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
  <div className="h-full w-full flex flex-col p-4 bg-gray-800">
    {/* Display Screen - Full Width */}
    <div className="w-full p-4 text-right text-4xl bg-gray-700 rounded-md h-24 flex items-center justify-end overflow-x-auto">
      {input || "0"}
    </div>

    {/* Buttons Grid - Full Height */}
    <div className="grid grid-cols-4 gap-2 flex-grow mt-4">
      {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
        <button
          data-testid="equals"
          key={btn}
          className="p-6 text-2xl bg-gray-600 rounded-lg hover:bg-gray-500"
          onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
        >
          {btn}
        </button>
      ))}
      <button
        className="col-span-2 p-6 text-2xl bg-red-600 rounded-lg hover:bg-red-500"
        onClick={handleClear}
      >
        C
      </button>
    </div>
  </div>
</div>

  );
}


const users = [
  {
    name:"user1Admin",
    pass:"pass123",
    operations:["all"]
  },
  {
    name:"user1",
    pass:"pass123",
    operations:["opp1, opp2"]
  },
  {
    name:"user2",
    pass:"pass12334",
    operations:["opp1, opp3,"]
  },
]
