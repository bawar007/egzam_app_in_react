import React, { Component } from "react";

import ResultTest from "../pass_componenst/PassResult";
import Test from "../pass_componenst/PassInProgress";
import Button from "../Buttons";

class PassPage extends Component {
  state = {
    form: false,
    tableSended: [],
    currentQuestion: 0,
    tableTest: [],
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
          currentQuestion: 0,
        });
      })
      .catch();
  };

  handleChange = (e) => {
    const table = [...this.state.tableSended];

    const newTable = table.map((el) => {
      const { name, value } = e.target;
      if (el.id === name && el.correctAnswer === value) {
        return {
          ...el,
          selectedAnswer: value,
          action: true,
        };
      } else if (el.id === name) {
        return {
          ...el,
          selectedAnswer: value,
          action: false,
        };
      } else {
        return el;
      }
    });
    this.setState({
      tableSended: newTable,
    });
  };

  handelSubmit = () => {
    this.setState({
      form: true,
      currentQuestion: 0,
    });
  };

  handleShow = (e) => {
    let currentQuestion = this.state.currentQuestion;
    if (e === "next" && currentQuestion < 4) {
      currentQuestion = currentQuestion + 1;
    } else if (e === "back" && currentQuestion > 0) {
      currentQuestion = currentQuestion - 1;
    } else return null;
    this.setState({
      currentQuestion,
    });
  };

  render() {
    const { form, tableSended, currentQuestion } = this.state;

    return (
      <div className="Pass">
        {form ? (
          <ResultTest
            button={this.handleClickRestart}
            table={tableSended[currentQuestion]}
            currentQ={currentQuestion}
            nextQuestion={this.handleShow}
          />
        ) : (
          <div className="testApp">
            {tableSended.length === 0 ? (
              <Button
                text={"Rozpocznij nowy test"}
                click={this.handleClickRestart}
              />
            ) : (
              <Test
                table={tableSended[currentQuestion]}
                click={this.handleChange}
                currentQ={currentQuestion}
                submit={this.handelSubmit}
                nextQuestion={this.handleShow}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default PassPage;
