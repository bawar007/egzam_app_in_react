import React, { useContext, useRef } from "react";

import NaviList from "./NaviList";
import { AppContext } from "../../../../Provider/provider";

const PassNaviSingle = () => {
  const { newState } = useContext(AppContext);

  const { tableSended, currentQuestion } = newState;

  const windowWidth = useRef(window.innerWidth);

  const questionsList = tableSended.map((el, index) => {
    let itemS = windowWidth.current > 700 ? 3 : 2;
    if (currentQuestion - itemS < index && currentQuestion + itemS > index) {
      return <NaviList key={el.id} action={el.action} index={index} />;
    } else {
      return null;
    }
  });

  return (
    <div className="pass_navi_L">
      <ul className="pass_navi_list myUl">{questionsList}</ul>
    </div>
  );
};

export default PassNaviSingle;
