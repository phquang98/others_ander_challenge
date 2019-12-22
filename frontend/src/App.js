import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import UserEntry from "./components/UserEntry";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeScore = this.onChangeScore.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userCollection: [],
      name: "",
      score: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3301/user")
      .then(res => this.setState({ userCollection: res.data }));
  }

  // comparing string lexicographically
  sortLogicByName(user1, user2) {
    const user1Name = user1.name.toLowerCase();
    const user2Name = user2.name.toLowerCase();
    if (user1Name < user2Name) {
      return -1; // user1 will come before user2
    } else if (user1Name > user2Name) {
      return 1; // user1 will come after user2
    } else {
      return 0; // ele order unchanged
    }
  }

  sortBtnName = () => {
    this.setState({
      userCollection: this.state.userCollection.sort(this.sortLogicByName)
    });
  };

  sortLogicByScore(user1, user2) {
    const user1Score = user1.score;
    const user2Score = user2.score;
    if (user1Score < user2Score) {
      return -1; // user1 will come before user2
    } else if (user1Score > user2Score) {
      return 1; // user1 will come after user2
    } else {
      return 0; // ele order unchanged
    }
  }

  sortBtnScore = () => {
    this.setState({
      userCollection: this.state.userCollection.sort(this.sortLogicByScore)
    });
  };

  onChangeName(e) {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  }

  onChangeScore(e) {
    this.setState({ score: e.target.value });
    console.log(this.state.score);
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      name: this.state.name,
      score: this.state.score
    };

    console.log(userObject);

    axios
      .post("http://localhost:3301/user", userObject)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({ name: "", email: "" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Code Challenge for Anders</header>
        <UserEntry id="ID" name="Name" score="Score"></UserEntry>
        {this.state.userCollection.map(user => (
          <UserEntry
            key={user._id}
            id={user._id}
            name={user.name}
            score={user.score + ""}
          ></UserEntry>
        ))}
        <Button onClick={this.sortBtnName} style={btnStyle}>
          Sort by name
        </Button>
        <Button onClick={this.sortBtnScore} style={btnStyle}>
          Sort by score
        </Button>

        <Form onSubmit={this.onSubmit} inline style={formStyle}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="mb-2 mx-sm-1">Name:</Form.Label>
            <Form.Control
              onChange={this.onChangeName}
              type="text"
              placeholder="Name here"
            />
            <Form.Label className="mb-2 mx-sm-1">Score:</Form.Label>
            <Form.Control
              onChange={this.onChangeScore}
              type="text"
              placeholder="Score here"
            />
            <Button
              variant="primary"
              type="submit"
              className="mx-sm-1"
              onClick={this.onSubmit}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const btnStyle = {
  margin: "1rem 0.5rem 2rem"
};

const formStyle = {
  justifyContent: "center"
};

export default App;
