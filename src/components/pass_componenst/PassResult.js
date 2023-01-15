import React, { useContext, useState } from "react";

import "../../styles/PassResult.css";

import Button from "../Buttons";
import { AppContext } from "./provider";

const PassResult = () => {
  const [settings, setSetting] = useState(false);

  const showSetting = () => {
    setSetting(() => !settings);
  };

  const {
    handleClickRestart,
    table,
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
  } = table;

  let score = 0;

  const testAnswer = (selectedA, action, correctA, value) => {
    if (selectedA === value) {
      if (action) {
        return "isTrue";
      } else {
        return "isFalse";
      }
    } else if (correctA === value) {
      return "good";
    } else if (correctA === value) {
      return "noChecked";
    } else {
      return "noValue";
    }
  };

  const selectText = (correctA, selectedA, value) => {
    if (correctA === value && correctA !== selectedA) {
      return <em>Poprawna odpowiedź</em>;
    } else if (value === selectedA && correctA !== value) {
      return <em>Twoja odpowiedź była zła</em>;
    } else if (selectedA === correctA && correctA === value) {
      return <em>Twoja odpowiedź była poprawna</em>;
    }
  };

  return (
    <>
      <h3 className="score">TWÓJ WYNIK: {score}/5</h3>
      <div className="changeNumbers">
        <button onClick={showSetting} className="btn" style={{ fontSize: 14 }}>
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
              max="14"
              defaultValue="1"
            />
            <br />
            <Button text="Zaakceptuj" click={handleClickRestart} />
          </div>
        ) : null}
      </div>
      <div key={id} className="pass_result">
        <h3>
          {currentQ + 1}. {question}
        </h3>
        <section
          className={testAnswer(selectedAnswer, action, correctAnswer, "a")}
        >
          A. {answerA}
          {selectText(correctAnswer, selectedAnswer, "a")}
        </section>
        <section
          className={testAnswer(selectedAnswer, action, correctAnswer, "b")}
        >
          B. {answerB}
          {selectText(correctAnswer, selectedAnswer, "b")}
        </section>
        <section
          className={testAnswer(selectedAnswer, action, correctAnswer, "c")}
        >
          C. {answerC}
          {selectText(correctAnswer, selectedAnswer, "c")}
        </section>
        <section
          className={testAnswer(selectedAnswer, action, correctAnswer, "d")}
        >
          D. {answerD} {selectText(correctAnswer, selectedAnswer, "d")}
        </section>
      </div>
      <div className="buttons">
        <Button click={handleShow.bind(this, "back")} text="back" />
        <Button click={handleShow.bind(this, "next")} text="next" />
        <Button click={handleClickRestart} text={"nowy test"} />
      </div>
    </>
  );
};

export default PassResult;
