import React from "react";
import "../../styles/Tested.css";
const Tested = (props) => {
  let table = props.test;
  console.log(table);
  const tab = table.map((el) => (
    <li key={el.id}>
      <h3>{el.tresc}</h3>
      <p className={el.action && el.answer === "a" ? "good" : "bad"}>
        A. {el.odpa}
      </p>
      <p className={el.action && el.answer === "b" ? "good" : "bad"}>
        B. {el.odpb}
      </p>
      <p className={el.action && el.answer === "c" ? "good" : "bad"}>
        C. {el.odpc}
      </p>
      <p className={el.action && el.answer === "d" ? "good" : "bad"}>
        D .{el.odpd}
      </p>
    </li>
  ));

  console.log(table);
  return (
    <>
      <ol>{tab}</ol>
    </>
  );
};

export default Tested;
