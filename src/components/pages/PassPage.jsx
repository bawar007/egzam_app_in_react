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
  });

  const [autoNextQuestion, setAuto] = useState(true);

  const [score, setScore] = useState(0);

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
    if (autoNextQuestion) {
      handleShow("next");
    }
  };

  const handleSubmit = () => {
    setState((prevState) => {
      return { ...prevState, form: true, currentQuestion: 0 };
    });
    tableSended.forEach((el) => {
      if (el.action) {
        setScore((p) => p + 1);
      }
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

  const handleAcceptSettings = () => {
    setSettingsValue((p) => {
      return { ...p, showAccept: true };
    });
  };

  const handleSettings = (e) => {
    console.log(e);
    if (e === "lnT") {
      handleClickRestart();
      setSettingsValue((p) => {
        return {
          ...p,
          visibility: false,
          showAccept: false,
        };
      });
    } else if (e === "quitS") {
      setSettingsValue((p) => {
        return {
          showAccept: false,
          visibility: true,
          value: newState.value,
          checked: false,
          items: newState.items,
        };
      });
    } else if (e === "ssP") {
      setSettingsValue((p) => {
        return {
          ...p,
          checked: true,
          showAccept: false,
          visibility: false,
        };
      });
    } else if (e === "qS") {
      setSettingsValue((p) => {
        return { ...p, showAccept: false };
      });
    }
  };
  const showSetting = () => {
    setSettingsValue((p) => {
      return { ...p, visibility: !p.visibility };
    });
  };

  const { form, tableSended, currentQuestion, items, value } = newState;

  return (
    <AppContext.Provider
      value={{
        handleNavi,
        handleShow,
        handleChange,
        handleSubmit,
        handleClickRestart,
        handleChangeNumber,
        handleChangeSelectValueSet,
        handleSettings,
        setAuto,
        showSetting,
        autoNextQuestion,
        currentQ: currentQuestion,
        tableSended,
        items,
        form,
        settingsValue,
        score,
        handleAcceptSettings,
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
