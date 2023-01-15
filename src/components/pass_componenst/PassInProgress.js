import React, { useContext } from "react";

import "../../styles/PassInProgress.css";

import Button from "../Buttons";
import { AppContext } from "./provider";

const PassInProgress = () => {
  const { table, handleChange, handleSubmit, handleShow, currentQ } =
    useContext(AppContext);
  const { id, question, selectedAnswer, answerA, answerB, answerC, answerD } =
    table;

  const fon = (
    <div key={id} className="pass_in_progress">
      <h3>{currentQ + 1 + ". " + question}</h3>
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
      <div className="buttons">
        <Button click={handleShow.bind(this, "back")} text="back" />
        <Button click={handleShow.bind(this, "next")} text="next" />
        <Button click={handleSubmit} text="wyślij" />
      </div>
    </div>
  );
  return <>{fon}</>;
};

export default PassInProgress;
