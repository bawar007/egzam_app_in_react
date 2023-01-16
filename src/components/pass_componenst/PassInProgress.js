import React, { useContext } from "react";

import "../../styles/PassInProgress.css";

import Button from "../Buttons";
import { AppContext } from "./provider";
import PassNavi from "../../components/pass_componenst/PassNavi";

const PassInProgress = () => {
  const { tableSended, handleChange, handleSubmit, handleShow, currentQ } =
    useContext(AppContext);

  const { id, question, selectedAnswer, answerA, answerB, answerC, answerD } =
    tableSended[currentQ];

  return (
    <div key={id} className="pass_in_progress">
      <PassNavi />
      <div className="pass_in_progress_answer">
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
      </div>

      <div className="buttons">
        {currentQ === 0 ? (
          <>
            <Button click={handleShow.bind(this, "next")} text="next" />
            <Button click={handleSubmit} text="wyślij" />
          </>
        ) : currentQ === tableSended.length - 1 ? (
          <>
            <Button click={handleShow.bind(this, "back")} text="back" />
            <Button click={handleSubmit} text="wyślij" />
          </>
        ) : (
          <>
            <div>
              <Button click={handleShow.bind(this, "back")} text="back" />
              <Button click={handleShow.bind(this, "next")} text="next" />
            </div>
            <Button click={handleSubmit} text="wyślij" />
          </>
        )}
      </div>
    </div>
  );
};

export default PassInProgress;
