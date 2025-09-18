import { useState } from "react";

export default function State() {
  const [num, setNum] = useState(0);
  return (
    <div className="text-center border-none shadow-lg w-[200px] h-[200px] m-auto ">
      <h1 className="text-9xl">{num}</h1>
      <button
        onClick={() => setNum(num + 1)}
        disabled={num >= 15}
        className="border-black border-1 bg-blue-400 text-xl m-1 p-1"
      >
        +1
      </button>

      <button
        onClick={() => setNum(num - 1)}
        disabled={num <= 0}
        className="border-black border-1 bg-red-400 text-xl m-1 p-1"
      >
        -1
      </button>
    </div>
  );
}
