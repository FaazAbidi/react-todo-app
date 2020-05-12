import React from "react";
import "./styles.css";
import AddTodo from "./addTodo";
import Todo from "./Todo";
import NoTodo from "./NoTodo";
import TodoContent from "./todoContent";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listcontent: TodoContent
    };
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent() {
    this.forceUpdate();
  }

  render() {
    let allTodos = this.state.listcontent.map(to => (
      <Todo
        key={to.key}
        text={to.text}
        checke={to.completed}
        done={this.updateContent}
      />
    ));
    if (allTodos.length < 1) {
      allTodos = [<NoTodo />];
    }
    return (
      <div>
        {allTodos}
        <AddTodo action={this.updateContent} />
      </div>
    );
  }
}
