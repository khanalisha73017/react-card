import React from "react";
import styled from "styled-components";

export const AddProgressTodo = ({
  progressTodo,
  setProgressTodo,
  progressTodos,
  setProgressTodos,
  setIsOpenProgress,
}) => {
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    console.log(value);
    setProgressTodo({
      ...progressTodo,
      [name]: type === "number" ? parseInt(value) : value,
    });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const { title, No_of_message } = progressTodo;
    console.log(title, No_of_message, "todo_OBJ");

    if (title || No_of_message) {
      setProgressTodos([
        ...progressTodos,
        { id: Date.now(), title: title, No_of_message: No_of_message },
      ]);
      setProgressTodo("");
      setIsOpenProgress(false);
    } else {
      setIsOpenProgress(false);
    }

    console.log(progressTodos, "main data");
  };
  return (
    <PROGRESS>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          name="title"
          placeholder="Name Of Todo"
          value={progressTodo.title}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          name="No_of_message"
          placeholder="No.Message"
          value={progressTodo.No_of_message}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="ADD TODO" className="add-btn" />
      </form>
    </PROGRESS>
  );
};

const PROGRESS = styled.div`
  input {
    /* margin-left: 2rem; */
  }
  .add-btn {
    border-radius: 5px;
  }
`;
