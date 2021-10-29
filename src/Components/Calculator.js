import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
  multipleByAmount,
  divideByAmount,
} from "../app/actions";

export function Calculator() {
  const number = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("0");

  return (
    <div>
        <h1>Value in input: </h1>
        <input
            aria-label="Set increment amount"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <h1>Operations: </h1>
        <div>
            <button
            class="button"
            onClick={() => {
                dispatch(incrementByAmount(Number(input) || 0));
            }}
            >
            Add
            </button>
            <button
            class="button"
            onClick={() => {
                dispatch(decrementByAmount(Number(input) || 0));
            }}
            >
            Subtract
            </button>
            <button
            class="button"
            onClick={() => {
                dispatch(multipleByAmount(Number(input) || 0));
            }}
            >
            Multiple
            </button>
            <button
            class="button"
            onClick={() => {
                dispatch(divideByAmount(Number(input) || 0));
            }}
            >
            Divide
            </button>
            
        </div>
        <h1>Result: </h1>
        <span>{number}</span>
    </div>
  );
}
