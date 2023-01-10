import React, { Component } from "react";

import "../styles/App.css";
import "../styles/Tested.css";
import Navigation from "./layouts/Navigation";
import Test from "./layouts/Test";
import ResultTest from "./layouts/ResultTest";
import Button from "./layouts/Buttons";

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
    });
  };

  render() {
    const { form, tableSended } = this.state;
    return (
      <div className="App">
        <Navigation />
        {form ? (
          <ResultTest button={this.handleClickRestart} table={tableSended} />
        ) : (
          <div className="testApp">
            <Test table={tableSended} click={this.handleChange} />
            {tableSended.length === 0 ? (
              <Button
                text={"Rozpocznij nowy test"}
                click={this.handleClickRestart}
              />
            ) : (
              <Button text={"Wyślij"} click={this.handelSubmit} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
