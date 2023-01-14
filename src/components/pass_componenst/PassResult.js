import React from "react";

import "../../styles/PassResult.css";

import Button from "../Buttons";
const PassResult = (props) => {
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
  const table = () => {
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
    } = props.table;

    return (
      <div key={id} className="pass_result">
        <h3>
          {props.currentQ + 1}. {question}
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
    );
  };
  return (
    <>
      <h3 className={"score"}>TWÓJ WYNIK: /5</h3>
      {table()}
      <div className="buttons">
        <Button click={props.nextQuestion.bind(this, "back")} text="back" />
        <Button click={props.nextQuestion.bind(this, "next")} text="next" />
        <Button click={props.button} text={"nowy test"} />
      </div>
    </>
  );
};

export default PassResult;
