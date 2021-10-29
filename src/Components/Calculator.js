import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount, decrementByAmount } from "../app/actions";

export function Calculator() {
  const number = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("0");

  return (
    <div>
      <div>
        <input
          aria-label="Set increment amount"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(Number(input) || 0));
          }}
        >
          Add Amount
        </button>
        <button
          onClick={() => {
            dispatch(decrementByAmount(Number(input) || 0));
          }}
        >
          Subtract
        </button>
        <span>{number}</span>
      </div>
    </div>
  );
}
