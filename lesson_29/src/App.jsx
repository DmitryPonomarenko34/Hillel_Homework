import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  return (
    <>
      <h1>Value: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
}
