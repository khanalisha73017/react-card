import React from "react";
import styled from "styled-components";

export const AddReviewTodo = ({
  setReviewTodo,
  setReviewTodos,
  reviewTodo,
  reviewTodos,
  setIsOpenReview,
}) => {
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    console.log(value);
    setReviewTodo({
      ...reviewTodo,
      [name]: type === "number" ? parseInt(value) : value,
    });
  };
  const handleAddTodo = (e) => {
    e.preventDefault();

    const { title, No_of_message } = reviewTodo;
    console.log(title, No_of_message, "todo_OBJ");

    if (title || No_of_message) {
      setReviewTodos([
        ...reviewTodos,
        { id: Date.now(), title: title, No_of_message: No_of_message },
      ]);
      setReviewTodo("");
      setIsOpenReview(false);
    } else {
      setIsOpenReview(false);
    }

    console.log(reviewTodo, "main data");
  };
  return (
    <ADDREVIEWTODO>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          name="title"
          placeholder="Name Of Todo"
          value={reviewTodo.title}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          name="No_of_message"
          placeholder="No.Message"
          value={reviewTodo.No_of_message}
          onChange={handleChange}
        />
        <input type="submit" value="ADD TODO" className="add-btn" />
      </form>
    </ADDREVIEWTODO>
  );
};

const ADDREVIEWTODO = styled.div`
  input {
    margin-left: 2rem;
  }
  .add-btn {
    border-radius: 5px;
  }
`;
