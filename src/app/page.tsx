"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <main>
      <div className="m-10 flex items-center justify-center flex-col gap-10">
        <h1 className="text-center font-bold uppercase text-3xl">
          Counter App
        </h1>
        <div>
          <h2 className="text-8xl flex items-center justify-center">{count}</h2>
        </div>
        <div className="flex justify-center gap-2 ">
          <button
            onClick={decrement}
            className="py-2 px-4 bg-red-300 rounded-xl cursor-pointer "
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="py-2 px-4 bg-gray-300 rounded-xl cursor-pointer "
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="py-2 px-4 bg-green-300 rounded-xl cursor-pointer"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}
