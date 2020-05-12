import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statuss: props.checke,
      bC: null,
      fontS: null,
      fontD: null
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck() {
    this.state.statuss = !this.state.statuss;
    console.log(this.state.statuss);
    if (this.state.statuss === true) {
      this.fontS = "oblique";
      this.fontD = "line-through";
      this.bC = "#BDC1D7";
    } else {
      this.fontS = null;
      this.fontD = null;
      this.bC = "#15257A";
    }

    this.props.done();
  }

  render() {
    let styles = {
      background: this.bC,
      fontStyle: this.fontS,
      textDecoration: this.fontD
    };
    console.log(this.statuss);
    return (
      <div className="App" style={styles}>
        <input
          type="checkbox"
          className="checkBox"
          onChange={this.handleCheck}
          checked={this.state.statuss}
        />
        <div className="Text">{this.props.text}</div>
      </div>
    );
  }
}
