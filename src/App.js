import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

import './components/TodoComponents/Todo.css';

const todo = [
  {
    name: 'Example thing',
    id: 123,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo
    };
  }

  addItem = (e, itemName) => {
    e.preventDefault();
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  toggleItem = itemID => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemID) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Your Todo List</h2>

        <TodoForm addItem={this.addItem} />

        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
