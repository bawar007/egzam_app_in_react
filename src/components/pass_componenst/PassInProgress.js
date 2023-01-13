import React from "react";

import "../../styles/PassInProgress.css";

import Button from "../Buttons";

const Test = (props) => {
  const { id, question, selectedAnswer, answerA, answerB, answerC, answerD } =
    props.table;
  const { click, nextQuestion, submit, currentQ } = props;

  const fon = (
    <div key={id} className="test">
      <h3>{currentQ + 1 + ". " + question}</h3>
      <label className={selectedAnswer === "a" ? "isChecked" : null}>
        <input type="radio" name={id} value="a" onChange={click} />
        {" A. " + answerA}
      </label>
      <label className={selectedAnswer === "b" ? "isChecked" : null}>
        <input type="radio" name={id} value="b" onChange={click} />
        {" B.  " + answerB}
      </label>
      <label className={selectedAnswer === "c" ? "isChecked" : null}>
        <input type="radio" name={id} value="c" onChange={click} />
        {" C.  " + answerC}
      </label>
      <label className={selectedAnswer === "d" ? "isChecked" : null}>
        <input type="radio" name={id} value="d" onChange={click} />
        {" D.  " + answerD}
      </label>
      <div className="buttons">
        <Button click={nextQuestion.bind(this, "back")} text="back" />
        <Button click={nextQuestion.bind(this, "next")} text="next" />
        <Button click={submit} text="wyślij" />
      </div>
    </div>
  );
  return <>{fon}</>;
};

export default Test;
