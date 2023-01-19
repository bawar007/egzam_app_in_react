import React, { useContext } from "react";
import { AppContext } from "./provider";
import PassNavi from "./PassNavi";

const PassResult = () => {
  const { handleClickRestart, tableSended, currentQ, handleShow } =
    useContext(AppContext);

  const {
    selectedAnswer,
    action,
    correctAnswer,
    id,
    question,
    answerA,
    answerB,
    answerC,
    answerD,
  } = tableSended[currentQ];

  const testAnswer = (value) => {
    if (selectedAnswer === value) {
      if (action) {
        return "goodA";
      } else {
        return "isFalse";
      }
    } else if (correctAnswer === value) {
      return "goodA";
    } else if (correctAnswer === value) {
      return "noChecked";
    } else {
      return "noValue";
    }
  };

  const selectText = (value) => {
    if (correctAnswer === value && correctAnswer !== selectedAnswer) {
      return <em>Poprawna odpowiedź</em>;
    } else if (value === selectedAnswer && correctAnswer !== value) {
      return <em>Twoja odpowiedź była zła</em>;
    } else if (selectedAnswer === correctAnswer && correctAnswer === value) {
      return <em>Twoja odpowiedź była poprawna</em>;
    }
  };

  return (
    <div key={id} className="pass_result">
      <PassNavi />
      <div className="pass_result_answer">
        <h3 className="pass_result_score">
          TWÓJ WYNIK: 0/{tableSended.length}
        </h3>
        <h3>
          {currentQ + 1}. {question}
        </h3>

        <section className={testAnswer("a")}>
          A. {answerA}
          {selectText("a")}
        </section>
        <section className={testAnswer("b")}>
          B. {answerB}
          {selectText("b")}
        </section>
        <section className={testAnswer("c")}>
          C. {answerC}
          {selectText("c")}
        </section>
        <section className={testAnswer("d")}>
          D. {answerD} {selectText("d")}
        </section>
      </div>

      <div className="pass_result_buttons">
        <div className="buttons">
          {currentQ === 0 ? (
            tableSended.length === 1 ? null : (
              <button
                onClick={handleShow.bind(this, "next")}
                className="btn btn-light"
              >
                next
              </button>
            )
          ) : currentQ === tableSended.length - 1 ? (
            <button
              onClick={handleShow.bind(this, "back")}
              className="btn btn-light"
            >
              back
            </button>
          ) : (
            <div>
              <button
                onClick={handleShow.bind(this, "back")}
                className="btn btn-light"
                style={{ marginRight: 10 }}
              >
                back
              </button>
              <button
                onClick={handleShow.bind(this, "next")}
                className="btn btn-light"
              >
                next
              </button>
            </div>
          )}

          <button onClick={handleClickRestart} className="btn btn-light">
            nowy test
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassResult;
