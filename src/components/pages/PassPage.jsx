import React, { useState } from "react";

import PassResult from "../pass_componenst/PassResult";
import PassInProgress from "../pass_componenst/PassInProgress";
import { AppContext } from "../pass_componenst/provider";

function PassPage() {
  const [newState, setState] = useState({
    form: false,
    tableSended: [],
    currentQuestion: 0,
    items: 1,
  });

  const [selectValue, setValue] = useState({
    value: "ee8",
    checked: false,
  });

  const handleClickRestart = () => {
    fetch("/data/pass_table.json")
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        switch (selectValue.value) {
          case "ee8":
            return data.ee8;
          case "ee9":
            return data.ee9;
          default:
            console.log(`Sorry, we are out of ${selectValue}`);
        }
      })
      .then((table) => {
        table
          .sort(
            () => Math.random() * table.length - Math.random() * table.length
          )
          .splice(newState.items);
        setState((prevState) => {
          return {
            ...prevState,
            tableSended: table,
            form: false,
            currentQuestion: 0,
          };
        });
      })
      .catch();
  };

  const handleChange = (e) => {
    const table = [...newState.tableSended];

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
    setState((prevState) => {
      return { ...prevState, tableSended: newTable };
    });
  };

  const handleSubmit = () => {
    setState((prevState) => {
      return { ...prevState, form: true, currentQuestion: 0 };
    });
  };

  const handleShow = (e) => {
    let currentQuestion = newState.currentQuestion;
    if (e === "next" && currentQuestion < newState.items - 1) {
      currentQuestion = currentQuestion + 1;
    } else if (e === "back" && currentQuestion > 0) {
      currentQuestion = currentQuestion - 1;
    } else return null;
    setState((prevState) => {
      return { ...prevState, currentQuestion: currentQuestion };
    });
  };

  const handleNavi = (a) => {
    setState((prevState) => {
      return { ...prevState, currentQuestion: a };
    });
  };

  const handleChangeNumber = (e) => {
    const number = Number(e.target.value);
    if (number >= 1 && number <= 40) {
      setState((prevState) => {
        return { ...prevState, items: number };
      });
    }
  };

  const handleChangeSelectValue = (e) => {
    console.log(e.target.value);
    setValue(() => {
      return { value: e.target.value };
    });
  };

  const { form, tableSended, currentQuestion, items, score } = newState;

  return (
    <AppContext.Provider
      value={{
        handleNavi,
        handleShow,
        handleChange,
        handleSubmit,
        handleClickRestart,
        handleChangeNumber,
        handleChangeSelectValue,
        currentQ: currentQuestion,
        tableSended,
        items,
        form,
        selectValue,
        score,
      }}
    >
      <div className="pass_page">
        {form ? (
          <PassResult />
        ) : tableSended.length === 0 ? (
          <div className="pass_app">
            <h1>
              <span>Witaj !!! Tutaj sprawdzisz swoją wiedzę.</span>
            </h1>
            <h2>Ile pytań chciałbyś rozwiązać ?</h2>
            <p>(1-40)</p>
            <h4>Ilość pytań: {items}</h4>
            <input
              type="range"
              value={items}
              onChange={handleChangeNumber}
              min="1"
              max="40"
              step="1"
              className="form-range"
            />
            <h2>Wybierz rodzaj egzaminu:</h2>
            <select
              value={selectValue.value}
              onChange={handleChangeSelectValue}
              className="form-select form-select-sm"
            >
              <option value="ee8">EE8</option>
              <option value="ee9">EE9</option>
            </select>
            <button
              onClick={handleClickRestart}
              className="btn btn-light btn-lg"
            >
              nowy test
            </button>
          </div>
        ) : (
          <PassInProgress />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default PassPage;
