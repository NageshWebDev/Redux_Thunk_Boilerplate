import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../feature/counterA";

export default function CounterA() {
  const count = useSelector((state) => state.counterAReducer.count);
  const dispatch = useDispatch();
  const {
    decrementBy1,
    decrementByAmount,
    incrementBy1,
    incrementByAmount,
    reset,
  } = counterSlice.actions;

  console.log(reset());

  return (
    <div className="w-96 flex flex-col justify-center items-center border p-5 rounded-xl bg-gray-100 border-gray-300 shadow-sm">
      <p className="bg-white text-3xl w-full px-3 py-1 mb-5 rounded shadow-sm text-gray-600">
        {count}
      </p>
      <div className="w-full flex flex-col gap-2">
        <button onClick={() => dispatch(incrementBy1())} className="genericBtn">
          Increment By 1
        </button>
        <button onClick={() => dispatch(decrementBy1())} className="genericBtn">
          Decrement By 1
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="genericBtn"
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch(decrementByAmount(5))}
          className="genericBtn"
        >
          Decrement By 5
        </button>
        <button onClick={() => dispatch(reset())} className="genericBtn">
          Reset
        </button>
      </div>
    </div>
  );
}
