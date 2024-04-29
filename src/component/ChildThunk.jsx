import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customThunk } from "../feature/ThunkSlice";

export default function ChildThunk() {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.thunkReducer.loading);
  const status = useSelector((state) => state.thunkReducer.status);
  const type = useSelector((state) => state.thunkReducer.type);
  const { ok, message } = useSelector((state) => state.thunkReducer.response);

  function onClickHandler() {
    setClicked(true);
    dispatch(customThunk(2000));
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 border p-5 rounded-md shadow-sm">
      <div className="w-full h-24 flex items-center justify-center bg-gray-100">
        {clicked ? (
          loading ? (
            <p className="text-gray-400 animate-pulse">Please wait a moment.</p>
          ) : ok ? (
            <div>
              <p className="capitalize text-gray-700">status : {status}</p>
              <p className="capitalize text-gray-700">type : {type}</p>
              <p className="text-lime-600">Data is fetched</p>
            </div>
          ) : (
            <div className="text-red-600">{message}</div>
          )
        ) : (
          <div>
            <p className="text-gray-500">kindly click on button</p>
          </div>
        )}
      </div>
      <button
        className={`genericBtn ${
          clicked && loading ? "cursor-not-allowed" : ""
        }`}
        disabled={clicked && loading}
        onClick={onClickHandler}
      >
        Dispatch Thunk action
      </button>
      <p className="text-xs text-sky-600 -mt-3">
        *you can Re-dispatch thunk action
      </p>
    </div>
  );
}
