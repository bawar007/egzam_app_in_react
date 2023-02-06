import React, { useContext } from "react";

import { AppContext } from "../../Provider/provider";

import PassNavi from "../Subcomponents/PassNavi/PassNavi";

import Buttons from "../Subcomponents/PassButtons/PassButtons";

const PassInProgress = () => {
  const { newState, setState, settingsValue, handleShow } =
    useContext(AppContext);

  const { tableSended, currentQuestion } = newState;

  const { id, question, selectedAnswer, answerA, answerB, answerC, answerD } =
    tableSended[currentQuestion];

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
    if (settingsValue.autoNextQuestion) {
      handleShow("next");
    }
  };

  return (
    <div key={id} className="pass_in_progress">
      <PassNavi />
      <div className="pass_in_progress_answer">
        <h3>{currentQuestion + 1 + ". " + question}</h3>
        <label className={selectedAnswer === "a" ? "isChecked" : null}>
          <input type="radio" name={id} value="a" onChange={handleChange} />
          {" A. " + answerA}
        </label>
        <label className={selectedAnswer === "b" ? "isChecked" : null}>
          <input type="radio" name={id} value="b" onChange={handleChange} />
          {" B.  " + answerB}
        </label>
        <label className={selectedAnswer === "c" ? "isChecked" : null}>
          <input type="radio" name={id} value="c" onChange={handleChange} />
          {" C.  " + answerC}
        </label>
        <label className={selectedAnswer === "d" ? "isChecked" : null}>
          <input type="radio" name={id} value="d" onChange={handleChange} />
          {" D.  " + answerD}
        </label>
      </div>
      <Buttons result={false} />
    </div>
  );
};

export default PassInProgress;
