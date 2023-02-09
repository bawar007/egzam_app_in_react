import React, { useContext } from "react";
import { AppContext } from "../../../../Provider/provider";

import NaviList from "./NaviList";

const PassNaviMoreMinus = ({ allQuestionsMoreM, setQuestions }) => {
  const { newState, handleShow } = useContext(AppContext);

  const { tableSended, currentQuestion } = newState;

  const questionsList = tableSended.map((el, index) => {
    if (currentQuestion + 1 > index) {
      return <NaviList key={el.id} action={el.action} index={index} />;
    } else return null;
  });

  const handleClick = () =>
    setQuestions((p) => {
      return {
        allQuestionsMoreM: !p.allQuestionsMoreM,
        allQuestionsMoreP: false,
      };
    });

  return (
    <div className="pass_navi_MoreMinus">
      {allQuestionsMoreM ? (
        <div className="showAllQuestionsList displayRowWrap" id="showAll">
          <i
            className="fa-solid fa-angles-right myArrow"
            onClick={handleClick}
          ></i>
          <ul className="pass_navi_list_MoreP myUl">{questionsList}</ul>
        </div>
      ) : (
        <div>
          {currentQuestion > 2 && (
            <>
              <i
                className="fa-solid fa-angles-left myArrow"
                onClick={handleClick}
              ></i>
            </>
          )}
          <i
            className="fa-solid fa-chevron-left myArrow"
            onClick={handleShow.bind(this, "back")}
          ></i>
        </div>
      )}
    </div>
  );
};

export default PassNaviMoreMinus;
