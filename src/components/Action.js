import React from "react";
const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      Pick the task
    </button>
  </div>
);
export default Action;
