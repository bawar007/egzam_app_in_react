import React, { useState } from "react";

import PassResult from "../pass_componenst/PassResult";
import PassInProgress from "../pass_componenst/PassInProgress";
import Button from "../Buttons";
import PassNavi from "../../components/pass_componenst/PassNavi";

import { AppContext } from "../pass_componenst/provider";

function PassPage() {
  const [newState, setState] = useState({
    form: false,
    tableSended: [],
    currentQuestion: 0,
    items: 1,
  });

  const handleClickRestart = () => {
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
        table
          .sort(() => Math.random() * 11 - Math.random() * 10)
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
    if (number >= 1 && number <= 14) {
      setState((prevState) => {
        return { ...prevState, items: number };
      });
    }
  };

  const { form, tableSended, currentQuestion, items } = newState;

  return (
    <AppContext.Provider
      value={{
        handleNavi,
        handleShow,
        handleChange,
        handleSubmit,
        handleClickRestart,
        handleChangeNumber,
        currentQ: currentQuestion,
        table: tableSended[currentQuestion],
        tableLength: tableSended.length,
        items,
      }}
    >
      <div className="Pass">
        {form ? (
          <>
            <PassNavi />
            <PassResult />
          </>
        ) : (
          <div className="testApp">
            {tableSended.length === 0 ? (
              <>
                Ile pytań pokazać ?
                <input
                  type="number"
                  value={items}
                  onChange={handleChangeNumber}
                  min="1"
                  max="14"
                  defaultValue="1"
                />
                <Button text={"nowy test"} click={handleClickRestart} />
              </>
            ) : (
              <>
                <PassNavi />
                <PassInProgress />
              </>
            )}
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default PassPage;
