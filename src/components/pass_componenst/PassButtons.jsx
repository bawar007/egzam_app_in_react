import React, { useContext } from "react";

import { AppContext } from "./provider";

const Buttons = ({ result }) => {
  const { newState, setState, setScore, handleShow, handleClickRestart } =
    useContext(AppContext);

  const { currentQuestion, tableSended } = newState;

  const classBtn = "btn btn-light";

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
    <>
      <div className="buttons">
        {currentQuestion === 0 ? (
          tableSended.length === 1 ? null : (
            <>
              {result ? (
                <button onClick={handleClickRestart} className={classBtn}>
                  nowy test
                </button>
              ) : (
                <button onClick={handleSubmit} className={classBtn}>
                  wyślij
                </button>
              )}
              <i
                className="fa-solid fa-chevron-right fa-2xl"
                onClick={handleShow.bind(this, "next")}
              ></i>
            </>
          )
        ) : currentQuestion === tableSended.length - 1 ? (
          <>
            <i
              className="fa-solid fa-chevron-left fa-2xl"
              onClick={handleShow.bind(this, "back")}
            ></i>
            {result ? (
              <button onClick={handleClickRestart} className={classBtn}>
                nowy test
              </button>
            ) : (
              <button onClick={handleSubmit} className={classBtn}>
                wyślij
              </button>
            )}
          </>
        ) : (
          <>
            <i
              className="fa-solid fa-chevron-left fa-2xl"
              onClick={handleShow.bind(this, "back")}
            ></i>
            {result ? (
              <button onClick={handleClickRestart} className={classBtn}>
                nowy test
              </button>
            ) : (
              <button onClick={handleSubmit} className={classBtn}>
                wyślij
              </button>
            )}
            <i
              className="fa-solid fa-chevron-right fa-2xl"
              onClick={handleShow.bind(this, "next")}
            ></i>
          </>
        )}
      </div>
    </>
  );
};

export default Buttons;
