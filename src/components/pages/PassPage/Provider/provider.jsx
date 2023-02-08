import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
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

  const handleClickRestart = () => {
    let value = settingsValue.checked ? settingsValue.value : newState.value;
    let items = settingsValue.checked ? settingsValue.items : newState.items;
    //fetch("https://bawar007.github.io/egzam_app_in_react/data/pass_table.json")
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
          return { ...p, visibility: false, showAccept: false, items, value };
        });
      })
      .catch();
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

  const handleShow = (e) => {
    let currentQuestion = newState.currentQuestion;
    if (e === "next" && currentQuestion < newState.items - 1) {
      setState((prevState) => {
        return { ...prevState, currentQuestion: prevState.currentQuestion + 1 };
      });
    } else if (e === "back" && currentQuestion > 0) {
      setState((prevState) => {
        return { ...prevState, currentQuestion: prevState.currentQuestion - 1 };
      });
    } else return null;
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
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
