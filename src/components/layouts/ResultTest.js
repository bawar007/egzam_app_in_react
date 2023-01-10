import React from "react";

import Button from "../layouts/Buttons";
const Tested = (props) => {
  let number = 0;
  let score = 0;
  const testAnswer = (selectedA, action, correctA, value) => {
    if (selectedA === value) {
      if (action) {
        score = score + 1;
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
  const table = props.table.map((el) => {
    number = number + 1;
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
    } = el;

    return (
      <div key={id} className="result_test">
        <h3>
          {number}. {question}
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
  });
  return (
    <>
      <h3 style={{ textAlign: "center", fontSize: 20, marginTop: 20 }}>
        TWÓJ WYNIK: {score}/5
      </h3>
      {table}
      <Button click={props.button} text={"Rozpocznij nowy test"} />
    </>
  );
};

export default Tested;
