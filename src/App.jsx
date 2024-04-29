import CounterA from "./component/CounterA";
import CounterB from "./component/CounterB";
import ChildThunk from "./component/ChildThunk";
import ChildThunkB from "./component/ChildThunkB";

export default function App() {
  return (
    <section className=" w-screen h-screen flex flex-col justify-center items-center gap-10 px-10">
      <div className="flex gap-10">
        <CounterA />
        <CounterB />
      </div>
      <div className="w-72">
        <ChildThunk />
        <ChildThunkB />
      </div>
    </section>
  );
}
