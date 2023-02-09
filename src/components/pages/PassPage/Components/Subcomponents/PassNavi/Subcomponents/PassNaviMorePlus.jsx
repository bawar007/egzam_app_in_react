import React, { useContext } from "react";
import { AppContext } from "../../../../Provider/provider";

import NaviList from "./NaviList";

const PassNaviMorePlus = ({ allQuestionsMoreP, setQuestions }) => {
  const { newState, handleShow } = useContext(AppContext);

  const { tableSended, currentQuestion } = newState;

  const questionsList = tableSended.map((el, index) => {
    if (currentQuestion - 1 < index) {
      return <NaviList key={el.id} action={el.action} index={index} />;
    } else return null;
  });

  const handleClick = () =>
    setQuestions((p) => {
      return {
        allQuestionsMoreP: !p.allQuestionsMoreP,
        allQuestionsMoreM: false,
      };
    });

  return (
    <div className="pass_navi_MoreP">
      {allQuestionsMoreP ? (
        <div className="showAllQuestionsList_MoreP displayRowWrap" id="showAll">
          <ul className="pass_navi_list_MoreP myUl">{questionsList}</ul>
          <i
            className="fa-solid fa-angles-left myArrow"
            onClick={handleClick}
          ></i>
        </div>
      ) : (
        <div>
          <i
            className="fa-solid fa-chevron-right myArrow"
            onClick={handleShow.bind(this, "next")}
          ></i>
          {currentQuestion < tableSended.length - 3 ? (
            <>
              <i
                className="fa-solid fa-angles-right myArrow"
                onClick={handleClick}
              ></i>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default PassNaviMorePlus;
