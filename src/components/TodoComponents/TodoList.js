// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// receives your todos array and iterates over the list generating a new <Todo /> for each element in the array
import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todo.map(item => (
        <Todo key={item.id} item={item} toggleIteme={props.toggleItem} />
      ))}
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
