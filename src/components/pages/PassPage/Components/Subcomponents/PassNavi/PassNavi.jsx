import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../../Provider/provider";

import PassSettings from "../PassSettings/PassSettings";

const PassNavi = () => {
  const { newState, settingsValue, setSettingsValue, setState, handleShow } =
    useContext(AppContext);

  const { tableSended } = newState;

  const currentQ = newState.currentQuestion;

  const windowWidth = useRef(window.innerWidth);

  const [allQuestions, setQuestions] = useState({
    allQuestionsMoreM: false,
    allQuestionsMoreP: false,
    allQuestionsMoreSingle: true,
  });

  const showSetting = () => {
    setSettingsValue((p) => {
      return { ...p, visibility: !p.visibility };
    });
  };

  const handleNavi = (a) => {
    setState((prevState) => {
      return { ...prevState, currentQuestion: a };
    });
  };

  const handleChangeChecbox = (e) => {
    if (e === "MoreM") {
      setQuestions((p) => {
        return {
          ...p,
          allQuestionsMoreM: !p.allQuestionsMoreM,
          allQuestionsMoreSingle: !p.allQuestionsMoreSingle,
          allQuestionsMoreP: false,
        };
      });
    } else if (e === "MoreP") {
      setQuestions((p) => {
        return {
          ...p,
          allQuestionsMoreP: !p.allQuestionsMoreP,
          allQuestionsMoreSingle: !p.allQuestionsMoreSingle,
          allQuestionsMoreM: false,
        };
      });
    }
  };

  const naviList = tableSended.map((el, index) => {
    let itemS = windowWidth.current > 700 ? 3 : 2;
    console.log(windowWidth);
    if (currentQ - itemS < index && currentQ + itemS > index) {
      return (
        <li
          key={el.id}
          onClick={handleNavi.bind(this, index)}
          className={
            newState.form
              ? currentQ === index
                ? "activeNav myLi"
                : el.action
                ? "goodAnswer myLi"
                : "badAnswer myLi"
              : currentQ === index
              ? "activeNav myLi"
              : "myLi"
          }
        >
          {index + 1}
        </li>
      );
    } else {
      return null;
    }
  });

  const questionListP = tableSended.map((el, index) => {
    if (currentQ - 1 < index) {
      return (
        <li
          key={el.id}
          onClick={handleNavi.bind(this, index)}
          className={
            newState.form
              ? currentQ === index
                ? "activeNav myLi"
                : el.action
                ? "goodAnswer myLi"
                : "badAnswer myLi"
              : currentQ === index
              ? "activeNav myLi"
              : "myLi"
          }
        >
          {index + 1}
        </li>
      );
    } else return null;
  });

  const questionListLeft = tableSended.map((el, index) => {
    if (currentQ + 1 > index) {
      return (
        <li
          key={el.id}
          onClick={handleNavi.bind(this, index)}
          className={
            newState.form
              ? currentQ === index
                ? "activeNav myLi"
                : el.action
                ? "goodAnswer myLi"
                : "badAnswer myLi"
              : currentQ === index
              ? "activeNav myLi"
              : "myLi"
          }
        >
          {index + 1}
        </li>
      );
    } else return null;
  });

  return (
    <>
      <div className="pass_navi displayRowWrap">
        <div className="pass_navi_MoreMinus">
          {allQuestions.allQuestionsMoreM ? (
            <div className="showAllQuestionsList displayRowWrap" id="showAll">
              <i
                className="fa-solid fa-angles-right myArrow"
                onClick={handleChangeChecbox.bind(this, "MoreM")}
              ></i>
              <ul className="pass_navi_list_MoreP myUl">{questionListLeft}</ul>
            </div>
          ) : (
            <div>
              {currentQ > 2 ? (
                <>
                  <i
                    className="fa-solid fa-angles-left myArrow"
                    onClick={handleChangeChecbox.bind(this, "MoreM")}
                  ></i>
                </>
              ) : null}
              <i
                className="fa-solid fa-chevron-left myArrow"
                onClick={handleShow.bind(this, "back")}
              ></i>
            </div>
          )}
        </div>

        {!allQuestions.allQuestionsMoreM && !allQuestions.allQuestionsMoreP ? (
          <div className="pass_navi_L">
            <ul className="pass_navi_list myUl">{naviList}</ul>
          </div>
        ) : null}

        <div className="pass_navi_MoreP">
          {allQuestions.allQuestionsMoreP ? (
            <div
              className="showAllQuestionsList_MoreP displayRowWrap"
              id="showAll"
            >
              <ul className="pass_navi_list_MoreP myUl">{questionListP}</ul>
              <i
                className="fa-solid fa-angles-left myArrow"
                onClick={handleChangeChecbox.bind(this, "MoreP")}
              ></i>
            </div>
          ) : (
            <div>
              <i
                className="fa-solid fa-chevron-right myArrow"
                onClick={handleShow.bind(this, "next")}
              ></i>
              {currentQ < tableSended.length - 3 ? (
                <>
                  <i
                    className="fa-solid fa-angles-right myArrow"
                    onClick={handleChangeChecbox.bind(this, "MoreP")}
                  ></i>
                </>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <div className="changeAnswers">
        <div className="form-check form-check-reverse form-switch">
          <input
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={showSetting}
            checked={settingsValue.visibility}
            hidden
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <i className="fa-solid fa-wrench fa-2xl"></i>
          </label>
        </div>
        {settingsValue.visibility && <PassSettings />}
      </div>
    </>
  );
};

export default PassNavi;
