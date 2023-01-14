import React, { useState } from "react";

import PassResult from "../pass_componenst/PassResult";
import PassInProgress from "../pass_componenst/PassInProgress";
import Button from "../Buttons";
import PassNavi from "../../components/pass_componenst/PassNavi";

function PassPage() {
  const [newState, setState] = useState({
    form: false,
    tableSended: [],
    currentQuestion: 0,
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
        table.sort(() => Math.random() * 11 - Math.random() * 10).splice(5);
        setState(() => {
          return { tableSended: table, form: false, currentQuestion: 0 };
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

  const handelSubmit = () => {
    setState((prevState) => {
      return { ...prevState, form: true, currentQuestion: 0 };
    });
  };

  const handleShow = (e) => {
    let currentQuestion = newState.currentQuestion;
    if (e === "next" && currentQuestion < 4) {
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

  const { form, tableSended, currentQuestion } = newState;

  return (
    <div className="Pass">
      {form ? (
        <>
          <PassNavi
            click={handleNavi}
            number={tableSended.length}
            currentQ={currentQuestion}
          />
          <PassResult
            button={handleClickRestart}
            table={tableSended[currentQuestion]}
            currentQ={currentQuestion}
            nextQuestion={handleShow}
          />
        </>
      ) : (
        <div className="testApp">
          {tableSended.length === 0 ? (
            <Button text={"nowy test"} click={handleClickRestart} />
          ) : (
            <>
              <PassNavi
                click={handleNavi}
                number={tableSended.length}
                currentQ={currentQuestion}
              />
              <PassInProgress
                table={tableSended[currentQuestion]}
                click={handleChange}
                currentQ={currentQuestion}
                submit={handelSubmit}
                nextQuestion={handleShow}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default PassPage;
