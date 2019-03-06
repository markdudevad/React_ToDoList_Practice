import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
<div id="root" />;
class Calculator extends React.Component {
  state = { newTask: [], key: 0 };
  handleAddTaskClick = () => {
    if (this.inputNode.value) {
      var newArray = this.state.newTask.slice();
      this.setState({ key: this.state.key + 1 });
      newArray.push(<div key={this.state.key}>{this.inputNode.value}</div>);
      this.setState({ newTask: newArray });
      this.inputNode.value = "";
    }
  };
  handleRemoveTaskClick = () => {
    var newArray = this.state.newTask.slice();
    newArray.pop(newArray.length);
    this.setState({ newTask: newArray });
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
        <div>
          <input type="text" ref={node => (this.inputNode = node)} />
        </div>
        {newTask}
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
