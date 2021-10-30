import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <section className="thought-item">
      <p className="message">{thought.message}</p>
      <div className="likes-date">
        <div className="likes">
          <button
            className="like-button"
            onClick={() => onLikesIncrease(thought._id)}
          >
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>
          </button>

          <span className="total-likes">
            <p>x {thought.hearts}</p>
          </span>
        </div>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </section>
  );
};

export default ThoughtItem;
