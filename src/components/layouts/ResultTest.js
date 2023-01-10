import React from "react";
import "../../styles/Tested.css";
const Tested = (props) => {
  let number = 0;
  const table = props.table.map((el) => {
    number = number + 1;
    return (
      <div key={el.id} className="test">
        <h3>
          {number}. {el.question}
        </h3>
        <label
          className={
            el.action && el.selectedAnswer === "a" ? "isTrue" : "isFalse"
          }
        >
          {" A. " + el.answerA}
        </label>
        <label
          className={
            el.action && el.selectedAnswer === "b" ? "isTrue" : "isFalse"
          }
        >
          {" B.  " + el.answerB}
        </label>
        <label
          className={
            el.action && el.selectedAnswer === "c" ? "isTrue" : "isFalse"
          }
        >
          {" C.  " + el.answerC}
        </label>
        <label
          className={
            el.action && el.selectedAnswer === "d" ? "isTrue" : "isFalse"
          }
        >
          {" D.  " + el.answerD}
        </label>
      </div>
    );
  });
  return (
    <>
      {table}
      <button onClick={props.button}>Nowy test</button>
    </>
  );
};

export default Tested;
