import { useDispatch, useSelector } from "react-redux";
import counterBSlice from "../feature/counterB";

export default function CounterB() {
  const { setCount, square, squareRoot, decrementBy1, incrementBy1 } =
    counterBSlice.actions;
  const count = useSelector((state) => state.counterBReducer.count);
  const dispatch = useDispatch();
  console.log(setCount());

  return (
    <div className="w-96 flex flex-col justify-center items-center border p-5 rounded-xl bg-gray-100 border-gray-300 shadow-sm">
      <p className="bg-white text-3xl w-full px-3 py-1 mb-5 rounded shadow-sm text-gray-600">
        {count}
      </p>
      <div className="w-full flex flex-col gap-2">
        <button onClick={() => dispatch(square())} className="genericBtn">
          Square
        </button>
        <button onClick={() => dispatch(squareRoot())} className="genericBtn">
          Square Root
        </button>
        <button onClick={() => dispatch(incrementBy1())} className="genericBtn">
          Increment By 1
        </button>
        <button onClick={() => dispatch(decrementBy1())} className="genericBtn">
          Decrement By 1
        </button>
        <button onClick={() => dispatch(setCount(0))} className="genericBtn">
          Reset
        </button>
      </div>
    </div>
  );
}
