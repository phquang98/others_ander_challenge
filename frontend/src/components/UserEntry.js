import React, { Component } from "react";

class UserEntry extends Component {
  render() {
    return (
      <div style={wrapper}>
        <div style={idWrapper}>{this.props.id}</div>
        <div style={nameWrapper}>{this.props.name}</div>
        <div style={scoreWrapper}>{this.props.score}</div>
      </div>
    );
  }
}

const wrapper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};

const idWrapper = {
  height: "2rem",
  width: "15rem",
  border: "1px solid #515370",
  backgroundColor: "#35374A",
  color: "#A2A6E0"
};

const nameWrapper = {
  height: "2rem",
  width: "15rem",
  border: "1px solid #515370",
  backgroundColor: "#35374A",
  color: "#A2A6E0"
};

const scoreWrapper = {
  height: "2rem",
  width: "3rem",
  border: "1px solid #515370",
  backgroundColor: "#35374A",
  color: "#A2A6E0"
};

export default UserEntry;
