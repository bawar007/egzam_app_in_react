import React from "react";
import "../../styles/Test.css";
const Test = (props) => {
  let number = 0;
  const table = props.table;
  const fon = table.map((el) => {
    number = number + 1;
    return (
      <div key={el.id} className="test">
        <h3>
          {number}. {el.question}
        </h3>
        <label className={el.selectedAnswer === "a" ? "isChecked" : null}>
          <input type="radio" name={el.id} value="a" onChange={props.click} />
          {" A. " + el.answerA}
        </label>
        <label className={el.selectedAnswer === "b" ? "isChecked" : null}>
          <input type="radio" name={el.id} value="b" onChange={props.click} />
          {" B.  " + el.answerB}
        </label>
        <label className={el.selectedAnswer === "c" ? "isChecked" : null}>
          <input type="radio" name={el.id} value="c" onChange={props.click} />
          {" C.  " + el.answerC}
        </label>
        <label className={el.selectedAnswer === "d" ? "isChecked" : null}>
          <input type="radio" name={el.id} value="d" onChange={props.click} />
          {" D.  " + el.answerD}
        </label>
      </div>
    );
  });
  return <>{fon}</>;
};

export default Test;
