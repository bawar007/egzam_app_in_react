import React from "react";
import "../../styles/Test.css";
const Test = (props) => {
  let number = 0;
  const fon = props.table.map((el) => {
    number = number + 1;
    return (
      <div key={el.id} className="test">
        <h3>
          {number}. {el.tresc}
        </h3>
        <label>
          <input type="radio" name={el.id} value="a" onChange={props.click} />
          {"  " + el.odpa}
        </label>
        <label>
          <input type="radio" name={el.id} value="b" onChange={props.click} />
          {"  " + el.odpb}
        </label>
        <label>
          <input type="radio" name={el.id} value="c" onChange={props.click} />
          {"  " + el.odpc}
        </label>
        <label>
          <input type="radio" name={el.id} value="d" onChange={props.click} />
          {"  " + el.odpd}
        </label>
      </div>
    );
  });
  return <div>{fon}</div>;
};

export default Test;
