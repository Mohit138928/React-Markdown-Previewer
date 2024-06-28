import React from "react";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaExpandArrowsAlt } from "react-icons/fa";

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <LiaFreeCodeCamp /> {props.text}{" "}
      <button onClick={props.handleMaxAndMin} class="buttons">
        <FaExpandArrowsAlt />
      </button>
    </div>
  );
};

export default Toolbar;
