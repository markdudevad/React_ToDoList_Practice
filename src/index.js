import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
<div id="root" />;
class Calculator extends React.Component {
  state = { newTask: "" };
  handleAddTaskClick = () => {
    this.setState({ newTask: this.inputNode.value });
    this.inputNode.value = "";
  };
  handleRemoveTaskClick = () => {
    {
      /* NEED TO WRITE */
    }
  };
  render() {
    const { newTask } = this.state;
    return (
      <div id="todo_list">
        <div>To Do List</div>
        <div>
          <button onClick={this.handleAddTaskClick}>Add Task</button>
          <button onClick={this.handleRemoveTaskClick}>Remove Task</button>
        </div>
        <div>{newTask}</div>
        <div>
          <input type="text" ref={node => (this.inputNode = node)} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
