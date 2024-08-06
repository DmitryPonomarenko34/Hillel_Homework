import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const items = [
  { _id: 1, checked: false, text: "First Task" },
  { _id: 2, checked: false, text: "Second Task" },
];

function Home() {
  return (
    <>
      <TodoForm />
      <TodoList items={items} />
    </>
  );
}

export default Home;
