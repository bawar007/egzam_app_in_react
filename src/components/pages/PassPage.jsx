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
    value: "ee8",
  });

  const [settingsValue, setSettingsValue] = useState({
    visibility: false,
    value: newState.value,
    checked: false,
    items: 1,
    showAccept: false,
    autoNextQuestion: true,
  });

  const [score, setScore] = useState(0);

  const { form, tableSended, items, value } = newState;

  const handleClickRestart = () => {
    const value = settingsValue.checked ? settingsValue.value : newState.value;
    const items = settingsValue.checked ? settingsValue.items : newState.items;
    // fetch("https://bawar007.github.io/egzam_app_in_react/data/pass_table.json")
    fetch("/egzam_app_in_react/data/pass_table.json")
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        switch (value) {
          case "ee8":
            return data.ee8;
          case "ee9":
            return data.ee9;
          default:
            console.log(`Sorry, we are out of ${value}`);
        }
      })
      .then((table) => {
        table
          .sort(
            () => Math.random() * table.length - Math.random() * table.length
          )
          .splice(items);
        setState((prevState) => {
          return {
            ...prevState,
            tableSended: table,
            form: false,
            currentQuestion: 0,
            value,
            items,
          };
        });
        setScore(0);
        setSettingsValue((p) => {
          return { ...p, visibility: false, showAccept: false };
        });
      })
      .catch();
  };

  const handleShow = (e) => {
    let currentQuestion = newState.currentQuestion;
    if (e === "next" && currentQuestion < newState.items - 1) {
      console.log("next");
      setState((prevState) => {
        return { ...prevState, currentQuestion: prevState.currentQuestion + 1 };
      });
    } else if (e === "back" && currentQuestion > 0) {
      console.log("back");
      setState((prevState) => {
        return { ...prevState, currentQuestion: prevState.currentQuestion - 1 };
      });
    } else return null;
  };

  const handleChangeNumber = (e) => {
    const number = Number(e.target.value);
    if (e.target.name === "settingsNumber") {
      if (number >= 1 && number <= 40) {
        setSettingsValue((prevState) => {
          return { ...prevState, items: number };
        });
      }
    } else {
      if (number >= 1 && number <= 40) {
        setState((prevState) => {
          return { ...prevState, items: number };
        });
      }
    }
  };

  const handleChangeSelectValueSet = (e) => {
    if (e.target.name === "settingsSelectValue") {
      setSettingsValue((p) => {
        return { ...p, value: e.target.value };
      });
    } else {
      setState((p) => {
        return { ...p, value: e.target.value };
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleShow,
        handleClickRestart,
        handleChangeNumber,
        handleChangeSelectValueSet,
        setSettingsValue,
        setState,
        setScore,
        settingsValue,
        score,
        newState,
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
              value={value}
              onChange={handleChangeSelectValueSet}
              className="form-select form-select-sm"
            >
              <option value="ee8">EE8</option>
              <option value="ee9">EE9</option>
            </select>
            <button
              onClick={handleClickRestart}
              className="btn btn-light btn-lg"
              id="c"
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
