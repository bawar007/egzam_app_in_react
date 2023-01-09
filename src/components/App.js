import React, { Component } from "react";

import "../styles/App.css";
import Navigation from "./layouts/Navigation";
import Test from "./layouts/Test";
import Tested from "./layouts/Tested";

class App extends Component {
  state = {
    answers: [],
    hecked: "",
    form: false,
  };

  componentDidMount() {
    fetch("/data/wszystko.json")
      .then((data) => data.json())
      .then((el) => {
        const table = el;
        table.sort(() => Math.random() * 241 - Math.random() * 240);
        table.splice(5, table.length - 1);
        this.setState({
          answers: table,
        });
      });
  }

  handleChange = (e) => {
    const table = this.state.answers;
    table.filter((el) => {
      if (el.id === e.target.name && el.answer === e.target.value) {
        el.action = true;
      } else {
        console.log(el);
      }
    });
    this.setState({
      answers: table,
    });
  };

  handleSumbit = (e) => {
    e.preventDefault();
    if (e.isTrusted) {
      this.setState({
        form: true,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Navigation />

        {this.state.form ? (
          <Tested test={this.state.answers} />
        ) : (
          <form onSubmit={this.handleSumbit}>
            <Test table={this.state.answers} click={this.handleChange} />
            <button>Wyślij</button>
          </form>
        )}
      </div>
    );
  }
}

export default App;
