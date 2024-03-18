import React, { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

export const AddTodo = ({
  todo,
  setTodo,
  Todos,
  setTodos,

  setIsOpenToDO,
}) => {
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    console.log(value);
    setTodo({
      ...todo,
      [name]: type === "number" ? parseInt(value) : value,
    });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const { title, No_of_message } = todo;
    console.log(title, No_of_message, "data");

    if (!title == "" || !No_of_message == "") {
      let newTodo = {
        id: Date.now(),
        title: title,
        No_of_message: No_of_message,
      };
      setTodos([...Todos, newTodo]);

      setIsOpenToDO(false);
      setTodo({ title: "", No_of_message: "" });
    } else {
      setIsOpenToDO(false);
    }
  };
  console.log(Todos, "main data");
  // console.log(newTodo, "newTodo");

  return (
    <ADDTODO>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          name="title"
          placeholder="Name Of Todo"
          value={todo.title}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          name="No_of_message"
          placeholder="No.Message"
          value={todo.No_of_message}
          onChange={handleChange}
        />
        <br />
       
        <input type="submit" value="ADD TODO" className="add-btn" />
      </form>
    </ADDTODO>
  );
};
const ADDTODO = styled.div`
  input {
    /* margin-left: 2rem; */
  }
  .add-btn {
    border-radius: 5px;
  }
`;
