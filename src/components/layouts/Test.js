import React from "react";
import "../../styles/Test.css";

import Button from "../layouts/Buttons";
const Test = (props) => {
  const table = props.table;
  const fon = (
    <div key={table.id} className="test">
      <h3>{props.currentQ + 1 + ". " + table.question}</h3>
      <label className={table.selectedAnswer === "a" ? "isChecked" : null}>
        <input type="radio" name={table.id} value="a" onChange={props.click} />
        {" A. " + table.answerA}
      </label>
      <label className={table.selectedAnswer === "b" ? "isChecked" : null}>
        <input type="radio" name={table.id} value="b" onChange={props.click} />
        {" B.  " + table.answerB}
      </label>
      <label className={table.selectedAnswer === "c" ? "isChecked" : null}>
        <input type="radio" name={table.id} value="c" onChange={props.click} />
        {" C.  " + table.answerC}
      </label>
      <label className={table.selectedAnswer === "d" ? "isChecked" : null}>
        <input type="radio" name={table.id} value="d" onChange={props.click} />
        {" D.  " + table.answerD}
      </label>
      <Button click={props.submit} text="wyślij" />
    </div>
  );
  return <>{fon}</>;
};

export default Test;
