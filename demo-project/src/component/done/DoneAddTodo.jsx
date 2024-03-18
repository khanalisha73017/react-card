import React from "react";
import styled from "styled-components";

export const DoneAddTodo = ({ done, setDone, dones, setDones, setIsOpen }) => {
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    console.log(value);
    setDone({
      ...done,
      [name]: type === "number" ? parseInt(value) : value,
    });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    const { title, No_of_message } = done;
    console.log(title, No_of_message, "todo_OBJ");

    if (title || No_of_message) {
      setDones([
        ...dones,
        { id: Date.now(), title: title, No_of_message: No_of_message },
      ]);
      setDone("");
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }

    console.log(dones, "main data");
  };
  return (
    <DONE>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          name="title"
          placeholder="Name Of Todo"
          value={done.title}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          name="No_of_message"
          placeholder="No.Message"
          value={done.No_of_message}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="ADD TODO" className="add-btn" />
      </form>
    </DONE>
  );
};

const DONE = styled.div`
  input {
    margin-left: 2rem;
  }
  .add-btn {
    border-radius: 5px;
  }
`;
