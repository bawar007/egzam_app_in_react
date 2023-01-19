import React, { useContext, useState } from "react";
import { AppContext } from "./provider";

const PassNavi = () => {
  const {
    handleNavi,
    currentQ,
    tableSended,
    items,
    handleChangeNumber,
    handleChangeSelectValue,
    selectValue,
    handleClickRestart,
    form,
  } = useContext(AppContext);

  const [allQuestions, setQuestions] = useState(false);

  const [settings, setSetting] = useState(false);

  const allQStyle = {
    marginTop: "215px",
  };

  const showSetting = () => {
    setSetting(() => !settings);
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

  const handleChangeChecbox = () => {
    setQuestions((prevState) => !prevState);
  };

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
              style={settings ? allQStyle : null}
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
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Settings
            </label>
          </div>
          {settings ? (
            <div className="setting">
              <h4>Wybrana ilość pytań: {items}</h4>
              <input
                type="range"
                value={items}
                onChange={handleChangeNumber}
                min="1"
                max="40"
                step="1"
                className="form-range"
                style={{ width: "50%" }}
              />
              <br />
              Rodzaj egzaminu:
              <select
                value={selectValue.value}
                onChange={handleChangeSelectValue}
                className="form-select form-select-sm"
                style={{
                  width: "30%",
                  marginBottom: 20,
                  marginLeft: 10,
                  display: "inline",
                }}
              >
                <option value="ee8">EE8</option>
                <option value="ee9">EE9</option>
              </select>
              <br />
              <button
                onClick={handleClickRestart}
                className="btn btn-light btn-lg"
              >
                Zaakceptuj
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PassNavi;
