import React, { useContext, useState } from "react";

import "../../styles/PassResult.css";

import Button from "../Buttons";
import { AppContext } from "./provider";
import PassNavi from "../../components/pass_componenst/PassNavi";

const PassResult = () => {
  const [settings, setSetting] = useState(false);

  const showSetting = () => {
    setSetting(() => !settings);
  };

  const {
    handleClickRestart,
    tableSended,
    currentQ,
    handleShow,
    items,
    handleChangeNumber,
  } = useContext(AppContext);

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

  let score = 0;

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
      <div className="pass_result_changeAnswers">
        <button onClick={showSetting} className="btn">
          {settings ? "Ukryj ustawienia" : "Pokaż ustawienia"}
        </button>
        {settings ? (
          <div className="setting">
            Wybierz ilość pytań:
            <input
              type="number"
              value={items}
              onChange={handleChangeNumber}
              min="1"
              max="40"
            />
            <br />
            <Button text="Zaakceptuj" click={handleClickRestart} />
          </div>
        ) : null}
      </div>

      <div className="pass_result_answer">
        <h3 className="pass_result_score">TWÓJ WYNIK: {score}/5</h3>
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
            <>
              <Button click={handleShow.bind(this, "next")} text="next" />
              <Button click={handleClickRestart} text={"nowy test"} />
            </>
          ) : currentQ === tableSended.length - 1 ? (
            <>
              <Button click={handleShow.bind(this, "back")} text="back" />
              <Button click={handleClickRestart} text={"nowy test"} />
            </>
          ) : (
            <>
              <div>
                <Button click={handleShow.bind(this, "back")} text="back" />
                <Button click={handleShow.bind(this, "next")} text="next" />
              </div>
              <Button click={handleClickRestart} text={"nowy test"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PassResult;
