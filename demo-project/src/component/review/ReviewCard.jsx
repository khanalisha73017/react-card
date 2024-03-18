import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TbMessage } from "react-icons/tb";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

export const ReviewCard = ({ title, No_of_message, id, index }) => {
  console.log(index, id, "reviewPage");
  return (
    <Draggable draggableId={`${id}`} key={id} index={index}>
      {(provided, snapshot) => (
        <REVIEWCARD
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div className="main">
            <ProgressBar
              completed={100}
              width="30%"
              isLabelVisible={false}
              animateOnRender={true}
              bgColor="#e6c60d"
            />
            <p>{title}</p>

            <div className="icon">
              <span>
                <HiOutlineMenuAlt2 />
              </span>{" "}
              <span>
                <TbMessage />
                <span>{No_of_message}</span>
              </span>{" "}
            </div>
          </div>
        </REVIEWCARD>
      )}
    </Draggable>
  );
};

const REVIEWCARD = styled.div`
  display: block;
  align-items: start;
  justify-content: start;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  .main {
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    cursor: pointer;
    transition: 0.2s;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }

  .main:hover {
    box-shadow: 0 0 5px;
    transform: scale(1.03);
  }

  p {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 0px;
    padding-top: 4px;
  }

  .icon {
    display: flex;
    padding-top: 1rem;
    gap: 2rem;
  }
`;
