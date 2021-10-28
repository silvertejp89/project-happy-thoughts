import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label htmlFor="newThought">Type your thought</label>
      <input
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <button disabled={newThought.length < 5} type="submit">
        Send thought
      </button>
    </form>
  );
};

export default ThoughtForm;
