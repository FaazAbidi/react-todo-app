import React from "react";
import TodoContent from "./todoContent";
import App from "./App";

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "none",
      addText: "Add Todo",
      content: TodoContent,
      formValue: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(props) {
    if (this.state.addText === "Submit") {
      this.state.content.push({
        id: 1,
        text: this.state.formValue,
        completed: false
      });
      this.setState({
        addText: "Add Todo"
      });
    }

    if (this.state.addText === "Add Todo") {
      this.setState({ display: "block" });
    } else if (this.state.addText === "Submit") {
      this.setState({
        display: "none",
        content: TodoContent
      });
    }

    this.props.action();
  }

  handleChange(event) {
    this.setState({
      addText: "Submit",
      formValue: event.target.value
    });
  }

  Clean(event) {
    event.target.value = null;
  }

  render() {
    let styles = {
      display: this.state.display
    };

    return (
      <div>
        <button className="addtodo" type="button" onClick={this.handleClick}>
          {this.state.addText}
        </button>
        <br />
        <input
          type="text"
          style={styles}
          onChange={this.handleChange}
          onClick={this.Clean}
          className="AddTodoField"
        />
      </div>
    );
  }
}
