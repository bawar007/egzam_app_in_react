import React, { useContext, useState } from "react";
import { AppContext } from "./provider";

import PassSettings from "./PassSettings";

const PassNavi = () => {
  const {
    handleNavi,
    currentQ,
    tableSended,
    form,
    settingsValue,
    showSetting,
  } = useContext(AppContext);

  const [allQuestions, setQuestions] = useState(false);

  const allQStyle = {
    marginTop: "315px",
  };

  const handleChangeChecbox = () => {
    setQuestions((prevState) => !prevState);
  };

  const naviList = tableSended.map((el, index) => {
    if (currentQ - 3 < index && currentQ + 3 > index) {
      return (
        <li
          key={el.id}
          onClick={handleNavi.bind(this, index)}
          className={
            form
              ? currentQ === index
                ? "activeNav"
                : el.action
                ? "goodAnswer"
                : "badAnswer"
              : currentQ === index
              ? "activeNav"
              : null
          }
        >
          {index + 1}
        </li>
      );
    } else {
      return null;
    }
  });

  const allQuestionList = tableSended.map((el, index) => {
    return (
      <li
        key={el.id}
        onClick={handleNavi.bind(this, index)}
        className={
          form
            ? currentQ === index
              ? "activeNav"
              : el.action
              ? "goodAnswer"
              : "badAnswer"
            : currentQ === index
            ? "activeNav"
            : null
        }
      >
        {index + 1}
      </li>
    );
  });

  return (
    <>
      <div className="pass_navi">
        <ul className="pass_navi_list">{naviList}</ul>
      </div>
      <div className="allQue">
        <div className="allQ_checbox">
          <label htmlFor="allQ">
            {allQuestions ? "Ukryj pytania" : "Pokaż wszystkie pytania"}
          </label>
          <input
            type="checkbox"
            id="allQ"
            checked={allQuestions}
            onChange={handleChangeChecbox}
          />
          {allQuestions ? (
            <div
              className="showAllQuestionsList"
              id="showAll"
              style={settingsValue.visibility ? allQStyle : null}
            >
              <ul>{allQuestionList}</ul>
            </div>
          ) : null}
        </div>
        <div className="changeAnswers">
          <div className="form-check form-check-reverse form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={showSetting}
              checked={settingsValue.visibility}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Settings
            </label>
          </div>
          {settingsValue.visibility && <PassSettings />}
        </div>
      </div>
    </>
  );
};

export default PassNavi;
