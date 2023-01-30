import React, { useContext } from "react";

import { AppContext } from "./provider";

const Buttons = ({ result }) => {
  const { newState, setState, setScore, handleShow, handleClickRestart } =
    useContext(AppContext);

  const { tableSended } = newState;

  const handleSubmit = () => {
    setState((prevState) => {
      return { ...prevState, form: true, currentQuestion: 0 };
    });
    tableSended.forEach((el) => {
      if (el.action) {
        setScore((p) => p + 1);
      }
    });
  };

  return (
    <div className="buttons">
      <i
        className="fa-solid fa-chevron-left fa-2xl"
        onClick={handleShow.bind(this, "back")}
      ></i>
      {result ? (
        <button onClick={handleClickRestart} className="btn btn-light">
          nowy test
        </button>
      ) : (
        <button onClick={handleSubmit} className="btn btn-light">
          wyślij
        </button>
      )}
      <i
        className="fa-solid fa-chevron-right fa-2xl"
        onClick={handleShow.bind(this, "next")}
      ></i>
    </div>
  );
};

export default Buttons;
