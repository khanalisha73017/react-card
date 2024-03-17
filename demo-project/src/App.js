import { useState } from "react";
import { Dashboard } from "./component/Dashboard";

function App() {
  const progressTodoinitState = {
    id: 0,
    title: "",
    No_of_message: "",
  };
  const initState = {
    id: 0,
    title: "",
    No_of_message: "",
  };
  const reviewTodoInitState = {
    id: 0,
    title: "",
    No_of_message: "",
  };
  const DoneTodoInitState = {
    id: 0,
    title: "",
    No_of_message: "",
  };
  const [todo, setTodo] = useState(initState);
  const [Todos, setTodos] = useState([]);

  const [progressTodo, setProgressTodo] = useState(progressTodoinitState);
  const [progressTodos, setProgressTodos] = useState([]);

  const [reviewTodo, setReviewTodo] = useState(reviewTodoInitState);
  const [reviewTodos, setReviewTodos] = useState([]);

  const [done, setDone] = useState(DoneTodoInitState);
  const [dones, setDones] = useState([]);

  return (
    <div>
      <Dashboard
        todo={todo}
        Todos={Todos}
        setTodo={setTodo}
        setTodos={setTodos}
        progressTodo={progressTodo}
        setProgressTodo={setProgressTodo}
        setReviewTodo={setReviewTodo}
        progressTodos={progressTodos}
        setProgressTodos={setProgressTodos}
        reviewTodo={reviewTodo}
        reviewTodos={reviewTodos}
        setReviewTodos={setReviewTodos}
        done={done}
        setDone={setDone}
        dones={dones}
        setDones={setDones}
        id={"1"}
      />
    </div>
  );
}

export default App;
