"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <main>
      <div className="m-10 flex items-center justify-center flex-col gap-10">
        <h1 className="text-center font-bold uppercase text-3xl">
          Counter App
        </h1>
        <div>
          <h2
            className={`text-8xl flex items-center justify-center ${
              count >= 5 ? "text-4xl text-green-500" : "text-black"
            }`}
          >
            {count}
          </h2>
        </div>
        <div className="flex justify-center gap-2 ">
          <button
            onClick={decrement}
            className="py-2 px-4 bg-red-300 hover:bg-red-400 rounded-xl cursor-pointer "
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded-xl cursor-pointer "
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="py-2 px-4 bg-green-300 hover:bg-green-400 rounded-xl cursor-pointer"
          >
            Increment
          </button>
        </div>
        <div className="flex flex-col w-full gap-2">
          {[5, 10, 15, 20, 25, 30, 35].map((milestone) =>
            count >= milestone ? (
              <div
                key={milestone}
                className={`text-center font-bold w-full h-[50px] rounded-xl flex items-center justify-center ${
                  milestone === 5
                    ? "bg-gradient-to-r from-green-400 to-lime-400 text-white"
                    : milestone === 10
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white"
                    : milestone === 15
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
                    : milestone === 20
                    ? "bg-gradient-to-r from-orange-400 to-yellow-300 text-white"
                    : milestone === 25
                    ? "bg-gradient-to-r from-emerald-400 to-teal-400 text-white"
                    : milestone === 30
                    ? "bg-gradient-to-r from-indigo-400 to-violet-400 text-white"
                    : "bg-gradient-to-r from-rose-400 to-fuchsia-400 text-white"
                }`}
              >
                Youve reached a count of {milestone}!
              </div>
            ) : null
          )}
        </div>
      </div>
    </main>
  );
}
