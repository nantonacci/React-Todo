// hold your input field and your Add Todo and Clear Completed buttons
// your input field should take in user input and allow a user to press enter or click on the submit button to add a todo to your list
// once a todo is submitted the todo list should re-render and show the added todo
import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: ''
    };
  }

  handleChanges = e => {
    this.setState({ itemName: e.target.value });
    console.log(this.state.itemName);
  };

  handleSubmit = e => {
    this.props.addItem(e, this.state.itemName);
    this.setState({ itemName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.itemName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
