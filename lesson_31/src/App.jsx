import { useTodo } from "./store";

export default function App() {
  const { items } = useTodo();

  return <>{items}</>;
}
