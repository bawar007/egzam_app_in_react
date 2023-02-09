import React, { useContext } from "react";
import { AppContext } from "../../Provider/provider";

import PassNavi from "../Subcomponents/PassNavi/PassNavi";
import Buttons from "../Subcomponents/PassButtons/PassButtons";
import SettingsOnOff from "../Subcomponents/PassSettings/subcomponents/SettingsOnOff/SettingsOnOff";

const PassResult = () => {
  const { newState, score } = useContext(AppContext);

  const { tableSended, currentQuestion } = newState;

  const {
    selectedAnswer,
    action,
    correctAnswer,
    id,
    question,
    answerA,
    answerB,
    answerC,
    answerD,
  } = tableSended[currentQuestion];

  const testAnswer = (value) => {
    if (selectedAnswer === value) {
      if (action) {
        return "goodA";
      } else {
        return "isFalse";
      }
    } else if (correctAnswer === value) {
      return "goodA";
    } else if (correctAnswer === value) {
      return "noChecked";
    } else {
      return "noValue";
    }
  };

  const selectText = (value) => {
    if (correctAnswer === value && correctAnswer !== selectedAnswer) {
      return <em>Poprawna odpowiedź</em>;
    } else if (value === selectedAnswer && correctAnswer !== value) {
      return <em>Twoja odpowiedź była zła</em>;
    } else if (selectedAnswer === correctAnswer && correctAnswer === value) {
      return <em>Twoja odpowiedź była poprawna</em>;
    }
  };

  const scorePro = (score / tableSended.length) * 100;

  return (
    <div key={id} className="pass_result">
      <PassNavi />
      <div className="pass_result_answer">
        <h3 className="pass_result_score">
          TWÓJ WYNIK: {score}/{tableSended.length} {Math.floor(scorePro)}%
          <p>{scorePro >= 50 ? "Brawo zdałeś" : "Niestety nie zdałeś"}</p>
        </h3>

        <SettingsOnOff />
        <h3>
          {currentQuestion + 1}. {question}
        </h3>

        <section className={testAnswer("a")}>
          A. {answerA}
          {selectText("a")}
        </section>
        <section className={testAnswer("b")}>
          B. {answerB}
          {selectText("b")}
        </section>
        <section className={testAnswer("c")}>
          C. {answerC}
          {selectText("c")}
        </section>
        <section className={testAnswer("d")}>
          D. {answerD} {selectText("d")}
        </section>
      </div>

      <Buttons result={true} />
    </div>
  );
};

export default PassResult;
