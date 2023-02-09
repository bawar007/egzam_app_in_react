import React, { useState } from "react";

import PassNaviMoreMinus from "./Subcomponents/PassNaviMoreMinus";
import PassNaviMorePlus from "./Subcomponents/PassNaviMorePlus";
import PassNaviSingle from "./Subcomponents/PassNaviSingle";

const PassNavi = () => {
  const [allQuestions, setQuestions] = useState({
    allQuestionsMoreM: false,
    allQuestionsMoreP: false,
  });

  const { allQuestionsMoreM, allQuestionsMoreP } = allQuestions;

  return (
    <>
      <div className="pass_navi">
        <PassNaviMoreMinus
          allQuestionsMoreM={allQuestionsMoreM}
          setQuestions={setQuestions}
        />

        {!allQuestionsMoreM && !allQuestionsMoreP && <PassNaviSingle />}

        <PassNaviMorePlus
          allQuestionsMoreP={allQuestionsMoreP}
          setQuestions={setQuestions}
        />
      </div>
    </>
  );
};

export default PassNavi;
