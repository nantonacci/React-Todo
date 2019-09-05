// a component that takes in the todo data and displays the task to the screen
import React from 'react';

const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
