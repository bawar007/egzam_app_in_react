import React, { Component } from "react";

import "../styles/App.css";
import Navigation from "./layouts/Navigation";
import Test from "./layouts/Test";
import ResultTest from "./layouts/ResultTest";

class App extends Component {
  state = {
    form: false,
    tableSended: [],
  };
  handleClickRestart = () => {
    fetch("/data/wszystko.json")
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        let table = data;
        table.sort(() => Math.random() * 11 - Math.random() * 10).splice(5);
        this.setState({
          tableSended: table,
          form: false,
        });
      })
      .catch();
  };

  handleChange = (e) => {
    const table = this.state.tableSended;

    const a = table.map((el) => {
      if (el.id === e.target.name && el.correctAnswer === e.target.value) {
        return {
          id: el.id,
          question: el.question,
          answerA: el.answerA,
          answerB: el.answerB,
          answerC: el.answerC,
          answerD: el.answerD,
          correctAnswer: el.correctAnswer,
          selectedAnswer: e.target.value,
          action: true,
        };
      } else if (el.id === e.target.name) {
        return {
          id: el.id,
          question: el.question,
          answerA: el.answerA,
          answerB: el.answerB,
          answerC: el.answerC,
          answerD: el.answerD,
          correctAnswer: el.correctAnswer,
          selectedAnswer: e.target.value,
          action: false,
        };
      } else {
        return el;
      }
    });

    this.setState({
      tableSended: a,
    });
    console.log(this.state.tableSended);
  };

  handelSubmit = (e) => {
    this.setState({
      form: true,
    });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        {this.state.form ? (
          <ResultTest
            button={this.handleClickRestart}
            table={this.state.tableSended}
          />
        ) : (
          <div className="testApp">
            <Test table={this.state.tableSended} click={this.handleChange} />
            <button className="btn" onClick={this.handelSubmit}>
              Wyślij
            </button>
            <button onClick={this.handleClickRestart}>Nowy test</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
