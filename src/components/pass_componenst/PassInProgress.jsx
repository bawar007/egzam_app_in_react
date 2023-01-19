import React, { useContext } from "react";
import { AppContext } from "./provider";
import PassNavi from "./PassNavi";

const PassInProgress = () => {
  const { tableSended, handleChange, handleSubmit, handleShow, currentQ } =
    useContext(AppContext);

  const { id, question, selectedAnswer, answerA, answerB, answerC, answerD } =
    tableSended[currentQ];

  const classBtn = "btn btn-light";

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
          tableSended.length === 1 ? null : (
            <>
              <button
                onClick={handleShow.bind(this, "next")}
                className={classBtn}
                id="next"
              >
                next
              </button>
            </>
          )
        ) : currentQ === tableSended.length - 1 ? (
          <>
            <button
              onClick={handleShow.bind(this, "back")}
              className={classBtn}
              id="back"
            >
              back
            </button>
          </>
        ) : (
          <>
            <div>
              <button
                onClick={handleShow.bind(this, "back")}
                className={classBtn}
                style={{ marginRight: 10 }}
                id="back"
              >
                back
              </button>
              <button
                onClick={handleShow.bind(this, "next")}
                className={classBtn}
                id="next"
              >
                next
              </button>
            </div>
          </>
        )}
        <button onClick={handleSubmit} className={classBtn}>
          wyślij
        </button>
      </div>
    </div>
  );
};

export default PassInProgress;
