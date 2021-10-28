import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <div>
      <p>{thought.message}</p>
      <button onClick={() => onLikesIncrease(thought._id)}>
        &hearts; {thought.hearts}
      </button>
      <p className="date">
        - Created at: {moment(thought.createdAt).fromNow()}
      </p>
    </div>
  );
};

export default ThoughtItem;
